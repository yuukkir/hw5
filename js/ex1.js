function bodyNodes() {
    let nodes = document.body.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        
        if (nodes[i].nodeType === 3) {
            console.log("#text")
        }
        else {

            let tag = nodes[i].nodeName.toLowerCase();
            let text = nodes[i].textContent;

            console.log("<" + tag + ">" + text + "</" + tag + ">"); // why does this also output the <script>???
        }

    }
};
bodyNodes();