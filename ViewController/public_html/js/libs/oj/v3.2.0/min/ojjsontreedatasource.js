/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a){a.CA=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.v4=this.attr=this.title=null};a.CA.prototype.$xa=function(a){return function(c,b){return null!=c.attr&&null!=b.attr&&null!=c.attr[a]&&null!=b.attr[a]?c.attr[a]<b.attr[a]?-1:c.attr[a]===b.attr[a]?0:1:c[a]<b[a]?-1:c[a]===b[a]?0:1}};a.CA.prototype.OAa=function(a){return function(c,b){return null!=c.attr&&null!=b.attr&&null!=c.attr[a]&&null!=b.attr[a]?c.attr[a]<
b.attr[a]?1:c.attr[a]===b.attr[a]?0:-1:c[a]<b[a]?1:c[a]===b[a]?0:-1}};a.CA.prototype.Mka=function(a){var c=a.key;"ascending"===a.direction?this.children.sort(this.$xa(c)):"descending"===a.direction&&this.children.sort(this.OAa(c));for(var c=0,b=this.children.length;c<b;c++)this.children[c].Mka(a)};a.Zd=function(g){var c;c=new a.CA;null==g.id&&(c.id="root");this.data=this.zba({count:0},c,g);a.Zd.N.constructor.call(this,c)};o_("JsonTreeDataSource",a.Zd,a);a.f.xa(a.Zd,a.au,"oj.JsonTreeDataSource");a.Zd.prototype.Init=
function(){a.Zd.N.Init.call(this)};a.f.j("JsonTreeDataSource.prototype.Init",{Init:a.Zd.prototype.Init});a.Zd.prototype.zba=function(g,c,b,d){var e,f,h,k,l,m,p;null==d&&(d=0);for(k in b)if("children"==k||0==d&&b instanceof Array)for(e=0==d&&b instanceof Array?b:b[k],d++,p=0;p<e.length;p++){h=e[p];f=new a.CA;null==h.id&&(g.count++,null==h.attr?f.id="rid_"+g.count:null==h.attr.id&&(h.attr.id="rid_"+g.count));for(l in h)for(m in f)l==m&&"children"!=l&&(f[m]=h[l]),"depth"==m&&(f[m]=d);c.children.push(f);
for(m in h)"children"==m&&this.zba(g,c.children[p],h,d)}return c};a.Zd.prototype.getChildCount=function(a){null==a&&(a=this.data.id);a=this.ov(this.data,a);return a.children?a.children.length:0};a.f.j("JsonTreeDataSource.prototype.getChildCount",{getChildCount:a.Zd.prototype.getChildCount});a.Zd.prototype.fetchChildren=function(g,c,b){var d,e,f,h,k;f=[];null==g&&(g=this.data.id);h=this.ov(this.data,g);c||(c=[],c.start=0,c.count=h.children.length);c.count||(c.count=h.children.length);c.start||(c.start=
0);d=c.start;e=Math.min(h.children.length,d+c.count);for(c=d;c<e;c+=1)k=new a.CA,null!=h.children[c].attr&&(k.attr=h.children[c].attr),null!=h.children[c].id&&(k.id=h.children[c].id),null!=h.children[c].depth&&(k.depth=h.children[c].depth),null!=h.children[c].title&&(k.title=h.children[c].title),null!=h.children[c].parent&&(k.parent=h.children[c].parent),k.v4=0<h.children[c].children.length?!1:!0,f.push(k);g=new a.di(d,e,f,g);null!=b&&null!=b.success&&b.success.call(null,g)};a.f.j("JsonTreeDataSource.prototype.fetchChildren",
{fetchChildren:a.Zd.prototype.fetchChildren});a.Zd.prototype.fetchDescendants=function(g,c){var b,d,e,f;e=[];null==g&&(g=this.data.id);f=this.ov(this.data,g);b=[];b.start=0;b.count=f.children.length;d=b.start;for(b=Math.min(f.children.length,d+b.count);d<b;d+=1)f.children[d].v4=0<f.children[d].children.length?!1:!0,e.push(f.children[d]);e=new a.di(0,e.length,e,g);null!=c&&null!=c.success&&c.success.call(null,e)};a.f.j("JsonTreeDataSource.prototype.fetchDescendants",{fetchDescendants:a.Zd.prototype.fetchDescendants});
a.Zd.prototype.moveOK=function(){return"valid"};a.f.j("JsonTreeDataSource.prototype.moveOK",{moveOK:a.Zd.prototype.moveOK});a.Zd.prototype.move=function(g,c,b,d){var e;e=c;if(null==e||e==this.data.id){if("inside"!=b){a.C.log("Error: root can not be the reference node if position equals to "+b);return}e||(e=this.data.id)}g=this.ov(null,g);this.ov(g,e)?a.C.log("Error: the node to move contains the reference node as its sub-tree."):(c=this.ov(null,e),e=this.QY(e),this.cLa(g),"inside"==b?(this.Xs(g,g.depth-
(c.depth+1)),c.children.push(g)):"before"==b?(this.Xs(g,g.depth-c.depth),b=e.children.indexOf(c),-1<b&&(0!=b?e.children.splice(b,0,g):e.children.unshift(g))):"after"==b?(this.Xs(g,g.depth-c.depth),b=e.children.indexOf(c),-1<b&&e.children.splice(b+1,0,g)):"first"==b?(this.Xs(g,g.depth-c.depth),e.children.unshift(g)):"last"==b&&(this.Xs(g,g.depth-c.depth),e.children.push(g)),null!=d&&null!=d.success&&d.success.call(null,this.data))};a.f.j("JsonTreeDataSource.prototype.move",{move:a.Zd.prototype.move});
a.Zd.prototype.sort=function(a,c){var b;b=this.ov(this.data,this.data.id);b.Mka(a);null!=c&&null!=c.success&&c.success.call(null,b)};a.f.j("JsonTreeDataSource.prototype.sort",{sort:a.Zd.prototype.sort});a.Zd.prototype.getSortCriteria=function(){return{key:null,direction:"none"}};a.f.j("JsonTreeDataSource.prototype.getSortCriteria",{getSortCriteria:a.Zd.prototype.getSortCriteria});a.Zd.prototype.QY=function(a,c){var b,d=null;if(a==this.data.id)return null;null==c&&(c=this.data);if(c.children&&0<c.children.length){for(b=
0;b<c.children.length;b++)if(c.children[b].id&&c.children[b].id==a||c.children[b].attr&&c.children[b].attr.id==a)return c;for(b=0;b<c.children.length&&!(d=this.QY(a,c.children[b]));b++);}return d};a.Zd.prototype.ov=function(a,c){var b,d=null;null==a&&(a=this.data);if(a.id&&a.id==c||a.attr&&a.attr.id==c)return a;if(null!=a.children)for(b=0;b<a.children.length&&!d;b++)d=a.children[b].id&&a.children[b].id==c||a.children[b].attr&&a.children[b].attr.id==c?a.children[b]:this.ov(a.children[b],c);return d};
a.Zd.prototype.Xs=function(a,c){var b;a.depth-=c;if(a.children&&0!=a.children.length)for(b=0;b<a.children.length;b++)this.Xs(a.children[b],c)};a.Zd.prototype.cLa=function(a){var c;null!=a.id?c=a.id:null!=a.attr&&(c=a.attr.id);(c=this.QY(c))||(c=this.data);a=c.children.indexOf(a);-1<a&&c.children.splice(a,1)};a.Zd.prototype.getCapability=function(a){return"fetchDescendants"===a?"enable":"sort"===a?"default":"batchFetch"===a?"disable":"move"===a?"full":null};a.f.j("JsonTreeDataSource.prototype.getCapability",
{getCapability:a.Zd.prototype.getCapability});a.di=function(g,c,b,d){a.A.$s(g,null);a.A.$s(c,null);this.oTa=d;this.hw=g;this.IR=c;this.tj=b};o_("JsonNodeSet",a.di,a);a.di.prototype.getParent=function(){return this.oTa};a.f.j("JsonNodeSet.prototype.getParent",{getParent:a.di.prototype.getParent});a.di.prototype.getStart=function(){return this.hw};a.f.j("JsonNodeSet.prototype.getStart",{getStart:a.di.prototype.getStart});a.di.prototype.getCount=function(){return Math.max(0,this.IR-this.hw)};a.f.j("JsonNodeSet.prototype.getCount",
{getCount:a.di.prototype.getCount});a.di.prototype.getData=function(g){a.A.assert(g<=this.IR&&g>=this.hw);g-=this.hw;return this.tj[g]?this.tj[g].attr:null};a.f.j("JsonNodeSet.prototype.getData",{getData:a.di.prototype.getData});a.di.prototype.getMetadata=function(g){var c=[];a.A.assert(g<=this.IR&&g>=this.hw);g-=this.hw;c.key=this.tj[g].id?this.tj[g].id:this.tj[g].attr.id;c.leaf=this.tj[g].v4;c.depth=this.tj[g].depth;null==c.leaf&&(c.leaf=this.tj[g].children&&0<this.tj[g].children.length?!1:!0);
return c};a.f.j("JsonNodeSet.prototype.getMetadata",{getMetadata:a.di.prototype.getMetadata});a.di.prototype.Xs=function(a,c){var b;c++;a.depth=c;if(a.children&&0!=a.children.length)for(b=0;b<a.children.length;b++)this.Xs(a.children[b],c)};a.di.prototype.kj=function(g){var c,b,d;a.A.assert(g<=this.IR&&g>=this.hw);g-=this.hw;b=this.tj[g].depth;c=this.tj[g].children;if(0==c.length)return null;g=this.tj[g].id?this.tj[g].id:this.tj[g].attr.id;for(d=0;d<c.length;d++)this.Xs(c[d],b);return new a.di(0,c.length,
c,g)};a.f.j("JsonNodeSet.prototype.getChildNodeSet",{kj:a.di.prototype.kj})});