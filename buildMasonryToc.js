$("h1:first").after("<div id='tags' class='masonry'/>");

$("h1:first").after("<div id='toc'/>");

$("h2").each(function (i, h) {
    var name = $(h).text().trim();
    $(h).before("<br style='clear:both;'/><a href='#" + name + "' id='" + name + "'/>");
    var a = $(h).prev();
    $(h).detach();
    $(h).appendTo($(a));
});

$("a:contains('#')").each(function (i, a) {
    var title = findTitle(a);
    var name = a.innerText.replace("#", "").replace(" ", "_");
    // console.log("findTitle(" + a + ") => " + title + " name=" + name);
    // console.log($("#" + name));
    if ($("#" + name).length === 0) {
        $("#tags").append("<div id='" + name + "' class='item'><h2><a href='" + this.innerText + "'>" + this.innerText + "</a></h2> <div id='content-" + name + "'class='content-item'/></div>");
    }
    var h2 = $("#content-" + name);
    h2.append("<a href='#" + title + "'>" + title + "</a><br/>");
});

$("#content").children("br").each(function (i, a) {
    var style = i % 2 ? "odd" : "even";
    $(a).nextUntil("br,h1").addBack().wrapAll("<div class='" + style + "'>");
});

setTimeout(loadMasonry(), 10);

function loadMasonry() {
    var container = $(".masonry").get(0);
    if (container == null) {
        console.log("waiting to load Masonry");
        setTimeout(loadMasonry(), 100);
    } else {
        new Masonry(container, {itemSelector: '.item'});
    }
}


function findTitle(elt) {
    var h2 = $(elt).parent().prevAll("a:first()");
    return h2.text()
        ? h2.text()
        : findTitle($(elt).parent());
}