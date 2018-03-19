window.onload = function() {
    var el = document.getElementById("rotator");
    var urls = [
        "https://service.eu.sumologic.com/ui/dashboard.html?k=jIDl4CDmvvex1Ha8hGSrzs4bEyjSfCMaG1TvrUAqF5QFlGzl7N8LDjFTdFs7&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=gsMUMxLQgMMNtTOC6gE3qAEg6H2bHJqnFyHPqwz9myX7XfbLQBiBtQnVsen0&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=9VGulWmfLYiMZqnkxnPbjqn73QxgqgTsz4CwRGm0icNF6LCVwQzKf0z1cc3d&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=NNqX4CfMJzlfGmKPzZra7wqCrsXh1ZCpPmwiWb8rahuBNYULHGUfqUTIJCPo&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=HtH0cwWdDlSagRWfwCDyCVdhRfqNVSDrWYnt35PJWnoi6N03Rfmmb31Wmlb7&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=gsMUMxLQgMMNtTOC6gE3qAEg6H2bHJqnFyHPqwz9myX7XfbLQBiBtQnVsen0&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=bbdthL9iCsPRFXEhu0flwDtTBs8SI9UPPmr1HgOatIdyMX0it4z7IOU0aSps&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=pYFkpoFjSG9LSdR4mkHhQLLa6yz7uODV08Egb7CV8KVAFPk4cacIEd7TH2oj&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=ZFs0PGCrXWdCRMKSOMCt1TOf7bJsokrqfNf3OQyzyk9s45joRZL0r9o3Ksq7&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=tXLFaYHRAEbWeH7cOAsFzJi4WaghmPEB9XPCMMagzRWTdprnT7xqWnjrp9qj&t=r"
    ];
    var timeOut;
    var index = 0;
    function _loop(idx) {
        el.src = urls[index];
        timeOut = setTimeout(function () {
            index = (idx + 1) % urls.length;
            _loop(index);
        }, 30000);
    };
    _loop(index);
};