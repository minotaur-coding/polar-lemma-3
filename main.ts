const{readdirSync:R,readFileSync:F,writeFileSync:W,mkdirSync:K}=require("fs"),{join:J}=require("path"),E=new TextEncoder,T="0000001101024010301004012050220602307033100211102112021130211402115021160211701118021190211a0211b0111c0211d0211e0212002121021220213020031210322103320034000400114102050010510105200153010",A=[];
for(let i=0;i<185;i+=5)A[parseInt(T.slice(i,i+2),16)]=[+T[i+2],+T[i+3],+T[i+4]];
function run(p,g){const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);let s=0,c=0,l=0,y=0,q=0,t=0;
const e=x=>({o:o.subarray(0,l),x});
for(;;){if(t==1e6)return e(10);if(q<0||q>=n)return e(9);const v=p[q],z=A[v];if(!z)return e(5);
const[m,w,u]=z;if(q+m>=n)return e(9);t++;const k=q+1+m;
if(s<w)return e(2);if(s-w+u>256)return e(3);q=k;
switch(v){case 0:return e(0);
case 1:D[s++]=p[k-1]<<24>>24;break;
case 2:D[s++]=p[k-4]|p[k-3]<<8|p[k-2]<<16|p[k-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{const r=D[s-1];D[s-1]=D[s-2];D[s-2]=r;break}
case 6:D[s]=D[s-2];s++;break;
case 7:{const r=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=r;break}
case 16:D[s-2]=D[s-2]+D[s-1]|0;s--;break;
case 17:D[s-2]=D[s-2]-D[s-1]|0;s--;break;
case 18:D[s-2]=Math.imul(D[s-2],D[s-1]);s--;break;
case 19:case 20:case 21:case 22:{const b=D[s-1],a=D[s-2];if(!b)return e(4);s-=2;D[s++]=v==19?(a==-2147483648&&b==-1?a:a/b|0):v==20?(b==-1?0:a%b|0):v==21?(a>>>0)/(b>>>0)|0:(a>>>0)%(b>>>0)|0;break}
case 23:D[s-1]=-D[s-1];break;
case 24:D[s-2]&=D[s-1];s--;break;
case 25:D[s-2]|=D[s-1];s--;break;
case 26:D[s-2]^=D[s-1];s--;break;
case 27:D[s-1]=~D[s-1];break;
case 28:D[s-2]<<=D[s-1];s--;break;
case 29:D[s-2]>>=D[s-1];s--;break;
case 30:D[s-2]=D[s-2]>>>D[s-1];s--;break;
case 32:D[s-2]=D[s-2]==D[s-1]?1:0;s--;break;
case 33:D[s-2]=D[s-2]<D[s-1]?1:0;s--;break;
case 34:D[s-2]=D[s-2]>>>0<D[s-1]>>>0?1:0;s--;break;
case 48:q=k+(((p[k-2]|p[k-1]<<8)<<16)>>16);break;
case 49:case 50:{const r=((p[k-2]|p[k-1]<<8)<<16)>>16,h=D[--s];if(v==49?!h:h)q=k+r;break}
case 51:if(c==64)return e(7);C[c++]=k;q=p[k-2]|p[k-1]<<8;break;
case 52:if(!c)return e(8);q=C[--c];break;
case 64:{const r=D[s-1];if(r<0||r>=256)return e(6);D[s-1]=M[r];break}
case 65:{const r=D[s-1];if(r<0||r>=256)return e(6);s-=2;M[r]=D[s];break}
case 80:{const b=E.encode(""+D[s-1]);if(l+b.length>65536)return e(11);s--;o.set(b,l);l+=b.length;break}
case 81:if(l>=65536)return e(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=y<g.length?g[y++]:-1;break;
case 83:return e(D[--s]&255)}}}
for(const id of R(I=process.env.MAKEFUN_INPUT_DIR||"/input").sort()){let f;try{f=[F(J(I,id,"program.bin")),F(J(I,id,"input.bin"))]}catch{continue}
const r=run(new Uint8Array(f[0]),new Uint8Array(f[1])),d=J(process.env.MAKEFUN_OUTPUT_DIR||"/output",id);K(d,{recursive:!0});
W(J(d,"stdout.bin"),r.o);W(J(d,"exit.txt"),r.x+"\n")}
