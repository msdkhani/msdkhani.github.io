/* Abstract attention surface. Decorative, not a plot of patient data. */
(() => {
  const canvas = document.getElementById('attention-canvas');
  if (!canvas) return;
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' });
  if (!gl) return; // The CSS atmosphere remains as a static fallback.
  const vertex = `attribute vec2 point;
    uniform float time, aspect, pixelRatio; uniform vec2 pointer;
    varying float shade;
    void main(){
      float x=point.x, z=point.y;
      float d=distance(vec2(x,z),pointer*vec2(3.5,2.));
      float ripple=sin(d*5.-time*.8)*exp(-d*.65)*.22;
      float y=sin(x*.9+z*.7+time*.16)*.24+cos(z*1.6-time*.2)*.12+ripple;
      float depth=4.8+z*.6;
      gl_Position=vec4(x/aspect*2.2/depth,(y-.72+z*.18)*2.2/depth,0.,1.);
      gl_PointSize=pixelRatio*(1.1+1.6/depth);
      shade=(.18+.36*(y+.6))*(1.-smoothstep(2.4,4.8,abs(x)));
    }`;
  const fragment = `precision mediump float; varying float shade; uniform vec3 color;
    void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(color,shade*(1.-smoothstep(.15,.5,d)));}`;
  function compile(type, source) {
    const shader=gl.createShader(type); gl.shaderSource(shader,source);gl.compileShader(shader);
    if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error('Attention surface shader unavailable');
    return shader;
  }
  let program;
  try {
    program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)) return;
  } catch (_) { return; }
  gl.useProgram(program);
  const points=[];
  for(let y=0;y<100;y++)for(let x=0;x<160;x++)points.push((x/159-.5)*9,(y/99-.5)*6);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(points),gl.STATIC_DRAW);
  const attr=gl.getAttribLocation(program,'point');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
  const uniforms=Object.fromEntries(['time','aspect','pixelRatio','pointer','color'].map(n=>[n,gl.getUniformLocation(program,n)]));
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  let frame=null, paused=matchMedia('(prefers-reduced-motion: reduce)').matches, time=0,last=0;
  let x=0,y=0,sx=0,sy=0;
  function render(now){
    frame=null;
    if(!paused && last) time+=Math.min((now-last)/1000,.05);
    last=now;sx+=(x-sx)*.035;sy+=(y-sy)*.035;
    gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(uniforms.time,time);gl.uniform2f(uniforms.pointer,sx,sy);
    const light=document.documentElement.dataset.theme==='light';gl.uniform3f(uniforms.color,...(light?[.22,.28,.31]:[.66,.76,.77]));
    gl.drawArrays(gl.POINTS,0,points.length/2);
    if(!paused&&!document.hidden)frame=requestAnimationFrame(render);
  }
  function sync(){if(frame!==null)cancelAnimationFrame(frame);last=0;render(0);}
  function resize(){const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;gl.viewport(0,0,canvas.width,canvas.height);gl.uniform1f(uniforms.aspect,innerWidth/innerHeight);gl.uniform1f(uniforms.pixelRatio,dpr);sync();}
  window.addEventListener('pointermove',e=>{if(!paused){x=e.clientX/innerWidth*2-1;y=e.clientY/innerHeight*2-1;}},{passive:true});
  window.addEventListener('cosmic-motion',e=>{paused=e.detail;sync();});
  document.addEventListener('visibilitychange',sync);window.addEventListener('resize',resize,{passive:true});
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();paused=true;if(frame!==null)cancelAnimationFrame(frame);});
  function scrollFade() { canvas.style.opacity = String(Math.max(.16,1-window.scrollY/window.innerHeight*.8)); }
  window.addEventListener('scroll',scrollFade,{passive:true});
  scrollFade();resize();
})();
