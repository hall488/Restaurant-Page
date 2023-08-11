import tagClass from "./util.js";

const gamePlanPage = () => {

    let instructions = tagClass('div', 'instructions');
    instructions.textContent = 'Click to place first node. Subsequent nodes can be branched out from active nodes. Activate and deactivate nodes by clicking on them. Lines will snap to nodes if you click them.';

    let content = tagClass('div', 'content');

    let page = document.createElementNS('http://www.w3.org/2000/svg','svg');
    page.classList.add('page');

    let nodes = [];
    let activeNode = null;

    let pageListener = e => {

        console.log('page clicked');

        let dist = (a , b) => {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        }

        let createNode = e => {

            let node = document.createElementNS('http://www.w3.org/2000/svg','circle');
            let objectNode = {node, x: e.clientX, y: e.clientY -64};
            node.setAttribute('cx', objectNode.x);
            node.setAttribute('cy', objectNode.y);
            node.setAttribute('r', 20);
            nodes.push(objectNode);

            let nodeListener = e => {
                if(activeNode === null) {
                    activeNode = nodes.find(n => n.node == node);
                    activeNode.node.style.fill = 'var(--color2)';
                } else if(activeNode.node === node){
                    activeNode.node.style.fill = 'var(--color3)';
                    activeNode = null;
                } else {
                    page.appendChild(createLine(activeNode, objectNode));
                    nodes.forEach(n => page.appendChild(n.node));
                }
                e.stopPropagation();
            }

            node.addEventListener('click', nodeListener);

            return objectNode;
        }

        let createLine = (n1, n2) => {
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            newLine.setAttribute('id','line2');
            newLine.setAttribute('x1',n1.x);
            newLine.setAttribute('y1',n1.y);
            newLine.setAttribute('x2',n2.x);
            newLine.setAttribute('y2',n2.y);
            newLine.setAttribute('stroke-width', '5');

            return newLine;      
        }

        if(nodes.length == 0) {
            let firstNode = createNode(e);
            activeNode = firstNode;
            page.appendChild(firstNode.node);
            activeNode.node.style.fill = 'var(--color2)';
        } else if(activeNode != null ) {            
            let newNode = createNode(e);
            page.appendChild(createLine(activeNode, newNode));
            //draws node and redraws nodes ontop of lines
            nodes.forEach(n => page.appendChild(n.node));
        }
        
    }

    page.addEventListener('click', pageListener);
    content.appendChild(page);
    content.appendChild(instructions);
    

    return content;
}

export default gamePlanPage;