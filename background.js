/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function modifyRequestHeaders(details, headers) {
    if (!headers) {
        return;
    }
    for (var i = 0, length = headers.length; i < length; ++i) {
        var currHeader = headers[i];
        // Overrides the header if it is enabled and its name is not empty.
        if (currHeader.enabled && currHeader.name) {
            details.requestHeaders.push({name: currHeader.name, value: currHeader.value});
        }
    }
}
;

function passFilters(url, filters) {
    if (!filters) {
        return true;
    }
    var allow = false;
    for (var i = 0, length = filters.length; i < length; ++i) {
        var host = filters[i].host;
        if (!host) {
            allow = true;
            continue;
        }
        if (url.search(host.replace('*', '.*')) === 0) {
            allow = filters[i].behavior;
        }
    }
    return String(allow) === "true";
}
;

chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
            var currProfile = {headers: [{name: "Origin", value: "https://www.alunoonline.uerj.br", comment: "", enabled: true}, {name: "Referer", value: "https://www.alunoonline.uerj.br/id_consultas/id_sel_unidade.php", comment: "", enabled: true}], filters: [{host: "", behavior: "true", comment: ""}]};
            if (currProfile) {
                if (passFilters(details.url, currProfile.filters)) {
                    modifyRequestHeaders(details, currProfile.headers);
                }
            }
            return {requestHeaders: details.requestHeaders};
        },
        {urls: []},
['requestHeaders', 'blocking']
        );

//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//    chrome.tabs.executeScript(tabId, {file: "jquery.min.js"}, function() {
//        chrome.tabs.executeScript(tabId, {file: "background.js"}, function() {
//            chrome.tabs.executeScript(tabId, {code: "window.location.href=" + changeInfo.url});
//        });
//    });
//});

