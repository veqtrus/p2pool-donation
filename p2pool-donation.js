String.prototype.trim = String.prototype.trim || function () {return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');};
String.prototype.startsWith = String.prototype.startsWith || function (text) {return this.indexOf(text) === 0;};

function P2PoolDonationButton(parameters) {
    if (parameters.url == null || parameters.id == null) throw new Error("url and id cannot be null");
    parameters.coin = parameters.coin || "BTC";
    parameters.min = parseFloat(parameters.min || 0.001);
    this.parameters = parameters;
    this.id = '#' + parameters.id;
    this.uid = Math.floor((Math.random() * 2e9));
    this.create = function () {
        if ($(this.id + " #" + this.uid + ".P2PoolDonationButton-container").length > 0) return;
        var hidefunc = function (e) {
            var shadow = $(e.target), s = ".P2PoolDonationButton-balloon-shadow", c = "P2PoolDonationButton-show";
            if (shadow.is(s)) shadow.removeClass(c);
            else if (e.target.id != null && e.target.id.startsWith("p2pdb-x-")) $("#p2pdb-c-" + e.target.id.substr(8) + ' ' + s).removeClass(c);
        };
        var container = document.createElement("span");
        var button = document.createElement("a");
        var balloonShadow = document.createElement("div");
        var balloon = document.createElement("div");
        var style = document.createElement("style");
        style.setAttribute("type", "text/css");
        $(style).append(".P2PoolDonationButton-container {display:inline-block;font-size:11pt;text-align:left;}");
        $(style).append(".P2PoolDonationButton-container * {font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;text-decoration:none;line-height:normal;}");
        $(style).append(".P2PoolDonationButton-border {border:1px solid grey;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon-shadow {display:none;position:fixed;z-index:1000;top:0px;left:0px;width:100%;height:100%;margin:0px;justify-content:center;align-items:center;background:rgba(0,0,0,0.8);}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon-shadow.P2PoolDonationButton-show {display:flex;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon {position:relative;width:380pt;height:60%;padding:20px;color:black;background:white;box-shadow:5px 5px 20px #050505;-webkit-box-shadow:5px 5px 20px #050505;-moz-box-shadow:5px 5px 20px #050505;overflow:auto;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-button {display:block;margin:4px;padding:4px 6px 4px 6px;color:white;background:#f7931a;text-decoration:none;font-weight:bold;box-shadow:2px 2px 6px grey;-webkit-box-shadow:2px 2px 6px grey;-moz-box-shadow:2px 2px 6px grey;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-button:hover, .P2PoolDonationButton-container .P2PoolDonationButton-button:focus {color:white;background:#f75c1a;text-decoration:none;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon .P2PoolDonationButton-close {font-size:16pt;font-weight:bold;position:absolute;top:8pt;right:8pt;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon h3 {font-size:14pt;font-weight:bold;margin:1em 0em 1em 0em;color:black;background:transparent;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon p {margin:1em 0em 1em 0em;color:black;background:transparent;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon a {color:#1a7ef7;background:transparent;border:none;} .P2PoolDonationButton-container .P2PoolDonationButton-balloon a:hover, .P2PoolDonationButton-container .P2PoolDonationButton-balloon a:focus {color:#072cbe;background:transparent;text-decoration:none;border:none;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon img {border:none;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon label {display:block;font-size:9pt;font-weight:bold;color:black;background:transparent;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon input {display:block;width:60%;margin:auto;padding:4px;color:black;background:white;text-align:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12pt;border:2px solid black;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon table {border-collapse:collapse;width:100%;text-align:left;border:none;color:black;background:transparent;}");
        $(style).append(".P2PoolDonationButton-container .P2PoolDonationButton-balloon table td {text-align:left;border:none;} .P2PoolDonationButton-container .P2PoolDonationButton-balloon table th {font-weight:bold;text-align:left;border:none;}");
        container.setAttribute("id", "p2pdb-c-" + this.uid);
        container.setAttribute("class", "P2PoolDonationButton-container");
        container.setAttribute("data-burl", this.parameters.url);
        container.setAttribute("data-coin", this.parameters.coin);
        container.setAttribute("data-min", this.parameters.min);
        button.setAttribute("href", "javascript:void(0)");
        button.setAttribute("id", "p2pdb-b-" + this.uid);
        button.setAttribute("class", "P2PoolDonationButton-button P2PoolDonationButton-border");
        $(button).append("Donate to <em>P2Pool</em>");
        $(button).click(function () {
            if (this.id != null && this.id.startsWith("p2pdb-b-")) {
                $("#p2pdb-c-" + this.id.substr(8) + " .P2PoolDonationButton-balloon-shadow").addClass("P2PoolDonationButton-show");
                $("#p2pdb-a-" + this.id.substr(8)).focus();
            }
        });
        balloonShadow.setAttribute("class", "P2PoolDonationButton-balloon-shadow");
        balloon.setAttribute("class", "P2PoolDonationButton-balloon P2PoolDonationButton-border");
        $(balloon).append($("<a href=\"javascript:void(0)\" id=\"p2pdb-x-" + this.uid + "\" class=\"P2PoolDonationButton-close\">&times;</a>").click(hidefunc));
        $(balloon).append("<h3>Donate to <em>P2Pool</em></h3>");
        $(balloon).append("<label for=\"p2pdb-a-" + this.uid + "\">Amount in " + this.parameters.coin + "</label><input type=\"text\" id=\"p2pdb-a-" + this.uid + "\" class=\"P2PoolDonationButton-border\" />");
        var p = $("<p style=\"text-align:center;font-weight:bold;\"></p>"), asrc = "<a href=\"javascript:void(0)\"></a>";
        var donatefunc = function () {
            var escapehtml = function (unsafe) {
                return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\//g, "&#x2F;");
            };
            var bitcoinuri = function (address, amount) {
                return "bitcoin:" + address + "?amount=" + amount + "&label=P2Pool%20donation";
            };
            var printtable = function (table, data) {
                for (var address in data) {
                    table.append("<tr><td><a href=\"" + escapehtml(bitcoinuri(address, data[address])) + "\">" + address + "<a/></td><td>" + data[address] + "</td></tr>");
                }
            };
            if (this.id.startsWith("p2pdb-ds-") || this.id.startsWith("p2pdb-dm-")) {
                var uid = this.id.substr(9);
                var single = this.id.startsWith("p2pdb-ds-");
                var a = $("#p2pdb-a-" + uid).val().trim();
                var coin = $("#p2pdb-c-" + uid).attr("data-coin");
                var min = $("#p2pdb-c-" + uid).attr("data-min");
                var burl = $("#p2pdb-c-" + uid).attr("data-burl") + "patron_sendmany/";
                var result = $("#p2pdb-c-" + uid + " .P2PoolDonationButton-result").html("");
                var table = $(document.createElement("table"));
                if (a.length == 0) return;
                try {
                    if (isNaN(min = parseFloat(min))) return;
                } catch(e) {
                    return;
                }
                try {
                    a = parseFloat(a);
                } catch(e) {
                    alert("The amount has to be a number.");
                    return;
                }
                if (isNaN(a) || a < min) {
                    alert("The amount has to be at least " + min + ' ' + coin + '.');
                    return;
                }
                table.append("<tr><th>Address</th><th>Amount/" + coin + "</th></tr>");
                result.append(table)
                var url = single ? burl + a + '/' + a : burl + a + '/' + min;
                $.getJSON(url, function (data, status, xhr) {
                    if (status == "success") {
                        if (single)
                            for (var address in data)
                                table.before("<p style=\"text-align:center;\"><img alt=\"QR code\" title=\"" + address + "\" src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=" + escapehtml(encodeURIComponent(bitcoinuri(address, data[address]))) + "\" /></p>");
                        printtable(table, data);
                    }
                });
            }
        };
        p.append($(asrc).text("Donate single").attr("id", "p2pdb-ds-" + this.uid).click(donatefunc));
        p.append(" or ");
        p.append($(asrc).text("Donate multiple").attr("id", "p2pdb-dm-" + this.uid).click(donatefunc));
        $(balloon).append(p);
        $(balloon).append("<div class=\"P2PoolDonationButton-result\"></div>");
        $(container).append(button);
        $(container).append(balloonShadow);
        $(balloonShadow).append(balloon);
        ($("head").length > 0 ? $("head") : $(container)).append(style);
        $(this.id).html('').append(container);
        $("html").click(hidefunc);
    };
}