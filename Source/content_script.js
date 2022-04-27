walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\b(E|e)lon (M|m)usk\b/g, "Mr Burns");
	v = v.replace(/\b(E|e)lon (M|m)usk\b/g, "Mr Burns");
	v = v.replace(/\b(E|e)lon (M|m)usk\b/g, "Mr Burns");
	v = v.replace(/\b(E|e)lon (M|m)usk\b/g, "Mr Burns");
	v = v.replace(/\b(E|e)lon Reeve (M|m)usk\b/g, "Charles Montgomery Burns");
	v = v.replace(/\belonmusk\b/g, "Mr Burns");
	v = v.replace(/\bElon Reeve Musk\b/g, "Mr Burns");
	v = v.replace(/\bElon_Musk\b/g, "Mr Burns");
	v = v.replace(/\bElon\b/g, "Monty");
	v = v.replace(/\bMusk\b/g, "Burns");
	
	textNode.nodeValue = v;
}


