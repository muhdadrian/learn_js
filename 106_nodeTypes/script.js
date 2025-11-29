/*
Node Types:
1. Element
2. Attribute
3. Text
4. CData Section
5. Entity Reference
6. Entity
7. Processing Instruction
8. Comment
9. Document
10. Document Type
11. Document Fragment
12. Notation
*/

//NodeList vs HTMLCollection
//Node - for example element type for p
//if we choose more than a node regardless their types (element, text, attribute), that's called NodeList
//HTMLCollection is a group of node specially for HTML element only

/*
NodeList vs HTMLCollection:
1. both are node group
2. the node group - their representation are similar to array
3. nodelist can contain any type of node, while HTMLCollection must contain HTML elements
4. HMTLCollection behaviour is live, while nodelist not.
 */

/*
DOM Tree hirarchy structure:
1. Root Node:
- node that is the source of all nodes in DOM .
- node by default is document

2. Parent Node:
- node that is higher 1 level than the other nodes.
- body is a parent for h1, p, p, div and a.
- if 2 levels higher, it's called 'grandparent'.
- if more than 2 levels higher, it's called ancestor.
- but, we normally focused on parent. If we want to trace further above, we just go from parent to parent to parent.

3. Child Node:
- node that is lower 1 level from the other nodes.
- h1 is a child for body.
- child node does not care the node type. It could be text, attribute, element etc.

4. Children:
- is more specific - it's a child node with node type of HTML element

5. Siblings:
- child nodes with same parent

6. Descendant:
- child, grandchildren and the rest to lower

# we focus on three above: Root Node, Parent Node and Child Node.
*/
