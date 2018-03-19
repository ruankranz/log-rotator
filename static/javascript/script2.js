window.onload = function() {
    var el = document.getElementById("rotator");
    var urls = [
        "https://service.eu.sumologic.com/ui/dashboard.html?k=PzlCvd4GW39jNFRjX5gLTZIpHX0MwblaoLrj7hYGa2WTOhVVPWcp39Km2XJG&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=oPNu1xrqnZg48Bz2QA18xOnXmhylzZWg4MQZQ3GSiEUhh8IZIDcRbTvPJt0Y&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=ZYIfSyG5zFcR0uh6F9KVrJCIztb5DQluyGVvuhaFirTyC4bxLlqRf5Z5ZdZn&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=Hq3Ou4gQfLwEFAqAwfTs0WwlpEPXRIzuoN35uTnj4JIKqgDSiqKLb2YiME9W&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=2U4w6CaDpZGwnNHTdWO1gvnfsq0uGcdgFBUxfghUuuXPP1nj9B2B7lq95KXF&t=r",
		"https://service.eu.sumologic.com/ui/dashboard.html?k=cC0FiZB9CQ2XIFFDaILluS5uRGeYFSSVzx68PhCwSw8R8tWmQF1mnXeBAzwe&t=r"
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