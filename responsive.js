if (typeof window.randaffilistX45 === 'undefined') {
    window.randaffilistX45 = 'exists';
    window.addEventListener('message', function(event) {
        //console.log(event);
        if (height = event.data['height']) {
            // console.log(event.data);
            document.getElementById(event.data['id']).height = height;
            document.getElementById(event.data['id']).width = event.data['width'];
            if (event.data['style']) {
                document.getElementById(event.data['id']).style = event.data['style'];
            }
        }
    });

    function ReplaceWithPolyfill() {
        'use-strict';
        // For safari, and IE > 10
        var parent = this.parentNode, i = arguments.length, currentNode;
        if (!parent)
            return;
        if (!i)
            // if there are no arguments
            parent.removeChild(this);
        while (i--) {
            // i-- decrements i and returns the value of i before the decrement
            currentNode = arguments[i];
            if (typeof currentNode !== 'object') {
                currentNode = this.ownerDocument.createTextNode(currentNode);
            } else if (currentNode.parentNode) {
                currentNode.parentNode.removeChild(currentNode);
            }
            // the value of "i" below is after the decrement
            if (!i)
                // if currentNode is the first argument (currentNode === arguments[0])
                parent.replaceChild(currentNode, this);
            else
                // if currentNode isn't the first
                parent.insertBefore(currentNode, this.previousSibling);
        }
    }
    if (!Element.prototype.replaceWith)
        Element.prototype.replaceWith = ReplaceWithPolyfill;
    if (!CharacterData.prototype.replaceWith)
        CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
    if (!DocumentType.prototype.replaceWith)
        DocumentType.prototype.replaceWith = ReplaceWithPolyfill;

    var a = [];
    [].forEach.call(document.getElementsByTagName('ins'), function(o, e) {
        a[e] = o
    }),
    a.forEach(function(a, o) {
        if (!a.getAttribute('data-affquery'))
            return;
        var e = o + "_" + Math.floor(1e4 * Math.random())
          , t = document.createElement("iframe");
        t.width = a.getAttribute('data-width'),
        t.height = a.getAttribute('data-height');
        var r = {
            frameborder: 0,
            marginheight: 0,
            marginwidth: 0,
            id: e,
            scrolling: "no",
            sandbox: "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts",
            "data-id": e
        };
        for (var n in r)
            t.setAttribute(n, r[n]);
        t.src = a.getAttribute('data-domain') + "/" + a.getAttribute('data-affquery') + "&randomA=" + e + "&maxw=" + a.parentElement.clientWidth,
        a.replaceWith(t)
    })

}
