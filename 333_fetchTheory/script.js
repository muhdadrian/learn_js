/*
Fetch
- is a method in JS API to fetch resources from link (network), which returned promise that is done (fulfilled) when there's available response. (MDN) 
*/

fetch(resouces, init); // resources (url / Request Object) | init is additional configuration

//Resources:
//1. URL - address of the source we fetch
//2. Request Object - to represent when we request from the resource

//Init (optional):
//additional configuration for request in object
// we can send:
//1. method - get (default) | post
//2. headers
//3. body
//4. mode
//5. cache
//6. referrer
//7. referrerPolicy
//8. integrity
//9. keepalive
//10. signal

//Response:
//result from fetch in promise
//inside there two:
//1. property:
// - headers
// - ok
// - redirected
// - status
// - statusText
// - type
// - url
// - body
//2. method
// - clone()
// - error()
// - redirect()
// - blob() - binary large object
// - formData()
// - json()
// - text()
//most of the method above returned promise
