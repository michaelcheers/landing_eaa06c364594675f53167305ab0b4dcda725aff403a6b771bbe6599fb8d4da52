(()=>{
const _=[[6,0],[6,1],[8,2],[7,3],[0,4],[7,5],[4,6],[7,6],[5,7],[3,8],[1,3],[0,9],[2,0],[6,1],[5,10],[1,11],[8,3],[0,8],[6,12],[0,13],[4,1],[8,14],[3,15],[6,11],[0,3],[7,8]];
const $='info@lesmvgcpay.';
let r='';for(let i=0;i<_.length;i++){r+=$.charAt(_[i][1]);}
const e=document.getElementById('ob-email');
if(e){e.href='mailto:'+r;e.textContent=r;}
})();
