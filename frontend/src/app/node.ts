/**
 * example object from ws:
 * 
 * {
 *   "node_type" : 1,
 *   "id" : 1,
 *   "name" : "0 element asdf asdf adf",
 *   "description" : "asdf asdf asdf asfd  sad fasdf asdf asdf asdfa",
 *   "progress" : 100,
 *   "numChildren" : 6,
 *   "ctime" : "2018-06-03T05:28:41+0000",
 *   "mtime" : "2018-06-11T14:22:19+0000",
 *   "parentId" : 0,
 *   "valid" : true,
 *   "children" : [ ]
 * }
 * 
 */

export class Node {
  /*
  type: number = 0;
  id: number = -1;
  name: string = ''; 
  description: string = ''; 
  progress: number = 0;
  numChildren: number = 0; 
  ctime = Date.now();
  mtime = Date.now(); 
  parentId: number = 0;
  */
  constructor(
    type: number = 0,
    id: number = -1,
    name: string = '', 
    description: string = '', 
    progress: number = 0,
    numChildren: number = 0, 
    ctime = Date.now(),
    mtime = Date.now(), 
    parentId: number = 0
  
  ) {}
}
