"use client";

const LOGO_SRC = "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/GVK%20foundation%20FULL%20LOGO%20LATEST%20png%20(1).png";

export default function WelcomePage() {
  return (
    <main style={{ position:"relative", minHeight:"100vh", width:"100%", overflow:"hidden", background:"#04060f", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>

      {/* ── Smoke atmosphere ── */}
      <canvas id="smoke-canvas" aria-hidden="true" suppressHydrationWarning style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }} />

      {/* ── Animated canvas background ── */}
      <canvas id="bloom-canvas" aria-hidden="true" suppressHydrationWarning style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:1 }} />

      {/* ── Particle field ── */}
      <canvas id="particle-canvas" aria-hidden="true" suppressHydrationWarning style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:2 }} />

      {/* ── Deep vignette ── */}
      <div aria-hidden="true" style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 70% at 50% 48%, transparent 15%, rgba(4,6,15,0.6) 65%, rgba(4,6,15,0.97) 100%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", inset:"0 0 auto 0", height:120, background:"linear-gradient(to bottom, rgba(4,6,15,0.9), transparent)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", inset:"auto 0 0 0", height:160, background:"linear-gradient(to top, rgba(4,6,15,0.98), transparent)", pointerEvents:"none" }} />

      {/* ── Scanline overlay ── */}
      <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)", pointerEvents:"none", zIndex:1 }} />

      {/* ── Content ── */}
      <div style={{ position:"relative", zIndex:10, textAlign:"center", padding:"0 24px", maxWidth:640, width:"100%" }}>

        {/* Logo with glow pulse */}
        <div id="logo-wrap" suppressHydrationWarning style={{ marginBottom:40, opacity:0, transform:"translateY(20px)" }}>
          <div style={{ display:"inline-block", filter:"drop-shadow(0 0 28px rgba(200,0,0,0.5)) drop-shadow(0 0 8px rgba(200,0,0,0.25))", animation:"logoPulse 4s ease-in-out infinite" }}>
            <img src={LOGO_SRC} alt="GVK Brothers Foundation" style={{ height:"clamp(72px,10vw,120px)", width:"auto", objectFit:"contain" }} />
          </div>
        </div>

        {/* Eyebrow */}
        <div id="eyebrow" suppressHydrationWarning style={{ opacity:0, transform:"translateY(14px)", marginBottom:20 }}>
          <span style={{ fontFamily:"var(--font-playfair), Georgia, 'Times New Roman', serif", fontStyle:"italic", fontSize:11, fontWeight:600, letterSpacing:"0.36em", textTransform:"uppercase", color:"rgba(255,255,255,0.38)" }}>GVK Brothers Foundation</span>
        </div>

        {/* Headline — character-by-character reveal */}
        <h1 id="headline" suppressHydrationWarning style={{ fontFamily:"var(--font-playfair), Georgia, 'Times New Roman', serif", fontSize:"clamp(38px,8vw,88px)", lineHeight:1.02, fontWeight:700, letterSpacing:"-0.01em", margin:"0 0 32px", opacity:0 }}>
          <span id="h-word1" suppressHydrationWarning style={{ display:"inline-block", overflow:"hidden", verticalAlign:"bottom" }}>
            <span style={{ display:"block", transform:"translateY(110%)" }}>Welcome</span>
          </span>
          <span style={{ display:"inline-block", width:"0.22em" }} />
          <span id="h-word2" suppressHydrationWarning style={{ display:"inline-block", overflow:"hidden", verticalAlign:"bottom" }}>
            <span style={{ display:"block", transform:"translateY(110%)", background:"linear-gradient(115deg, #ff3535 0%, #ffffff 45%, #4472ff 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>to</span>
          </span>
          <br/>
          <span id="h-word3" suppressHydrationWarning style={{ display:"inline-block", overflow:"hidden", verticalAlign:"bottom" }}>
            <span style={{ display:"block", transform:"translateY(110%)", fontStyle:"italic", fontWeight:900, letterSpacing:"0.04em", background:"linear-gradient(115deg, #ff3535 0%, #ffffff 45%, #4472ff 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>GVK</span>
          </span>
          <span style={{ display:"inline-block", width:"0.22em" }} />
          <span id="h-word4" suppressHydrationWarning style={{ display:"inline-block", overflow:"hidden", verticalAlign:"bottom" }}>
            <span style={{ display:"block", transform:"translateY(110%)" }}>Foundation</span>
          </span>
        </h1>

        {/* CTA */}
        <div id="cta-wrap" suppressHydrationWarning style={{ opacity:0, transform:"translateY(18px)" }}>
          <a href="/foundation" style={{
            display:"inline-flex", alignItems:"center", gap:10,
            background:"linear-gradient(135deg, #cc0000, #990000)",
            color:"#fff", textDecoration:"none",
            padding:"15px 40px", borderRadius:100,
            fontSize:"clamp(13px,1.5vw,16px)", fontWeight:600, letterSpacing:"0.04em",
            boxShadow:"0 16px 52px -8px rgba(200,0,0,0.55), 0 0 0 1px rgba(200,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
            transition:"transform 0.22s ease, box-shadow 0.22s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform="scale(1.045)"; e.currentTarget.style.boxShadow="0 22px 64px -8px rgba(200,0,0,0.72), 0 0 0 1px rgba(200,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 16px 52px -8px rgba(200,0,0,0.55), 0 0 0 1px rgba(200,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)"; }}
          >
            Enter Foundation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div id="scroll-hint" style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0, zIndex:10 }}>
        <span style={{ fontSize:9, letterSpacing:"0.34em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)" }}>Scroll</span>
        <span style={{ display:"block", width:1, height:36, background:"rgba(255,255,255,0.18)", animation:"scrollLine 2.4s ease-in-out infinite" }} />
      </div> */}

      <style>{`
        @keyframes logoPulse { 0%,100%{filter:drop-shadow(0 0 28px rgba(200,0,0,0.5)) drop-shadow(0 0 8px rgba(200,0,0,0.25))} 50%{filter:drop-shadow(0 0 44px rgba(200,0,0,0.78)) drop-shadow(0 0 18px rgba(200,0,0,0.45))} }
        @keyframes scrollLine { 0%,100%{transform:scaleY(0.3);opacity:0.2;transform-origin:top}50%{transform:scaleY(1);opacity:0.9;transform-origin:top} }
        @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
(function(){
  /* ── Bloom / ring canvas ── */
  function initBloom(){
    var cv=document.getElementById('bloom-canvas');
    if(!cv)return;
    var ctx=cv.getContext('2d');
    function rsz(){cv.width=window.innerWidth;cv.height=window.innerHeight;}
    rsz();window.addEventListener('resize',rsz);

    var rings=[
      {rf:0.42,sw:0.9, bo:0.22,sp:0.00011, col:'220,8,8',   dash:[0.32,0.68]},
      {rf:0.35,sw:0.55,bo:0.14,sp:-0.00008,col:'200,10,10', dash:[0.2,0.8]},
      {rf:0.28,sw:1.2, bo:0.26,sp:0.00017, col:'240,15,15', dash:[0.44,0.56]},
      {rf:0.22,sw:0.7, bo:0.16,sp:-0.00013,col:'15,40,220', dash:[0.24,0.76]},
      {rf:0.50,sw:0.45,bo:0.10,sp:0.00007, col:'20,50,210', dash:[0.14,0.86]},
      {rf:0.58,sw:0.38,bo:0.08,sp:-0.00005,col:'140,5,200', dash:[0.10,0.90]},
      {rf:0.65,sw:0.30,bo:0.06,sp:0.00004, col:'100,5,220', dash:[0.07,0.93]},
      {rf:0.72,sw:0.22,bo:0.04,sp:-0.00003,col:'60,8,180',  dash:[0.05,0.95]},
      {rf:0.18,sw:0.8, bo:0.18,sp:0.00020, col:'255,20,20', dash:[0.38,0.62]},
    ];
    var sweeps=rings.map(function(_,i){
      return{phase:Math.random()*Math.PI*2,sp:(i%2?1:-1)*0.0007*(0.6+Math.random()*0.8)};
    });
    var t=0;
    function frame(){
      t++;
      var W=cv.width,H=cv.height,cx=W*0.5,cy=H*0.47,m=Math.min(W,H);
      ctx.clearRect(0,0,W,H);

      /* outer halo */
      ctx.globalCompositeOperation='screen';
      var halo=ctx.createRadialGradient(cx,cy,m*0.08,cx,cy,m*0.68);
      var ha=0.07+0.025*Math.sin(t*0.0005);
      halo.addColorStop(0,'rgba(200,0,0,'+(ha*1.4)+')');
      halo.addColorStop(0.35,'rgba(100,0,180,'+(ha*0.7)+')');
      halo.addColorStop(0.7,'rgba(0,20,160,'+(ha*0.4)+')');
      halo.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath();ctx.arc(cx,cy,m*0.68,0,Math.PI*2);
      ctx.fillStyle=halo;ctx.fill();
      ctx.globalCompositeOperation='source-over';

      rings.forEach(function(r,i){
        var radius=m*r.rf;
        var circ=2*Math.PI*radius;
        var dashLen=circ*r.dash[0];
        var gapLen=circ*r.dash[1];
        var angle=t*r.sp*Math.PI*2;
        var br=radius*(1+0.014*Math.sin(t*0.00045+i*0.9));
        var bo=r.bo*(0.82+0.18*Math.sin(t*0.00038+i));
        ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);
        /* base ring */
        ctx.beginPath();ctx.arc(0,0,br,0,Math.PI*2);
        ctx.setLineDash([dashLen,gapLen]);
        ctx.strokeStyle='rgba('+r.col+','+bo.toFixed(3)+')';
        ctx.lineWidth=r.sw;ctx.stroke();
        /* sweep arc */
        sweeps[i].phase+=sweeps[i].sp;
        var sp=sweeps[i].phase;
        var arcSpan=0.30+0.14*Math.sin(t*0.00028+i);
        ctx.beginPath();ctx.arc(0,0,br,sp,sp+arcSpan);
        ctx.setLineDash([]);
        var al=Math.min(bo*3.2,0.85);
        ctx.strokeStyle='rgba('+r.col+','+al.toFixed(3)+')';
        ctx.lineWidth=r.sw*2.6;ctx.stroke();
        ctx.restore();
      });

      /* central glow */
      ctx.globalCompositeOperation='screen';
      var cg=ctx.createRadialGradient(cx,cy,0,cx,cy,m*0.11);
      var ca=0.16+0.05*Math.sin(t*0.0006);
      cg.addColorStop(0,'rgba(255,60,30,'+ca+')');
      cg.addColorStop(0.55,'rgba(200,10,10,'+(ca*0.35)+')');
      cg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath();ctx.arc(cx,cy,m*0.11,0,Math.PI*2);
      ctx.fillStyle=cg;ctx.fill();
      ctx.globalCompositeOperation='source-over';
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ── Particle canvas — left → right flowing field with trails ── */
  function initParticles(){
    var cv=document.getElementById('particle-canvas');
    if(!cv)return;
    var ctx=cv.getContext('2d');
    function rsz(){cv.width=window.innerWidth;cv.height=window.innerHeight;}
    rsz();window.addEventListener('resize',rsz);
    var PALETTE=['255,80,60','255,160,80','255,220,160','220,40,40','255,255,255','255,200,120'];
    function spawn(){
      var H=window.innerHeight;
      return {
        x:-10-Math.random()*window.innerWidth*0.4,
        y:Math.random()*H,
        vx:0.8+Math.random()*2.4,
        vy:(Math.random()-0.5)*0.16,
        r:0.6+Math.random()*2.2,
        a:0.45+Math.random()*0.5,
        col:PALETTE[Math.floor(Math.random()*PALETTE.length)],
        wob:Math.random()*Math.PI*2,
        wobS:0.01+Math.random()*0.02,
        wobAmp:0.4+Math.random()*1.2,
        trail:[],
        maxTrail:8+Math.floor(Math.random()*16),
        pulse:Math.random()*Math.PI*2,
        pulseS:0.04+Math.random()*0.05,
      };
    }
    var pts=[];
    var N=140;
    for(var i=0;i<N;i++){
      var p=spawn();
      p.life=Math.random()*800;
      pts.push(p);
    }
    function frame(){
      var W=cv.width,H=cv.height;
      ctx.clearRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      pts.forEach(function(p){
        p.wob+=p.wobS;
        p.pulse+=p.pulseS;
        p.life++;
        p.x+=p.vx;
        p.y+=p.vy+Math.sin(p.wob)*p.wobAmp*0.22;
        p.trail.push({x:p.x,y:p.y});
        if(p.trail.length>p.maxTrail) p.trail.shift();
        var pulse=0.65+0.35*Math.sin(p.pulse);
        var coreA=p.a*pulse;
        /* glow halo */
        var g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);
        g.addColorStop(0,'rgba('+p.col+','+(coreA*0.30).toFixed(3)+')');
        g.addColorStop(0.4,'rgba('+p.col+','+(coreA*0.10).toFixed(3)+')');
        g.addColorStop(1,'rgba('+p.col+',0)');
        ctx.fillStyle=g;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r*5,0,Math.PI*2);ctx.fill();
        /* trail — streak leading back from the head */
        for(var i=0;i<p.trail.length;i++){
          var t=p.trail[i];
          var frac=(i+1)/p.trail.length;
          var tr=p.r*(0.35+frac*0.65);
          var fa=coreA*frac*0.55;
          ctx.beginPath();
          ctx.arc(t.x,t.y,tr,0,Math.PI*2);
          ctx.fillStyle='rgba('+p.col+','+fa.toFixed(3)+')';
          ctx.fill();
        }
        /* bright core */
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba('+p.col+','+Math.min(1,coreA).toFixed(3)+')';
        ctx.fill();
        /* tiny white-hot center */
        ctx.beginPath();ctx.arc(p.x,p.y,p.r*0.4,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,'+Math.min(1,coreA*0.9).toFixed(3)+')';
        ctx.fill();
        if(p.x>W+p.r*6){
          var np=spawn();
          p.x=np.x; p.y=np.y; p.vx=np.vx; p.vy=np.vy;
          p.r=np.r; p.a=np.a; p.col=np.col;
          p.wob=np.wob; p.wobS=np.wobS; p.wobAmp=np.wobAmp;
          p.trail=[]; p.maxTrail=np.maxTrail;
          p.pulse=np.pulse; p.pulseS=np.pulseS; p.life=0;
        }
      });
      ctx.globalCompositeOperation='source-over';
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ── Smoke canvas — left → right drifting wisps ── */
  function initSmoke(){
    var cv=document.getElementById('smoke-canvas');
    if(!cv)return;
    var ctx=cv.getContext('2d');
    function rsz(){cv.width=window.innerWidth;cv.height=window.innerHeight;}
    rsz();window.addEventListener('resize',rsz);
    var PALETTE=[
      {col:'255,235,210',w:0.8},
      {col:'220,30,30',  w:0.5},
      {col:'170,10,80',  w:0.4},
      {col:'80,40,200',  w:0.35},
      {col:'255,255,255',w:0.55},
    ];
    function spawn(){
      var W=window.innerWidth,H=window.innerHeight;
      var p=PALETTE[Math.floor(Math.random()*PALETTE.length)];
      var baseR=160+Math.random()*240;
      return {
        x:-baseR*0.9,
        y:Math.random()*H,
        vx:0.22+Math.random()*0.55,
        vy:(Math.random()-0.5)*0.18,
        r:baseR,
        a:0,
        peak:0.04+Math.random()*0.09,
        age:0,
        life:1100+Math.random()*1100,
        wob:Math.random()*Math.PI*2,
        wobS:0.003+Math.random()*0.006,
        col:p.col,
        weight:p.w,
        pieces:6+Math.floor(Math.random()*7),
      };
    }
    var puffs=[];
    var N=12;
    for(var i=0;i<N;i++){
      var s=spawn();
      s.age=Math.random()*s.life*0.7;
      puffs.push(s);
    }
    function frame(){
      var W=cv.width,H=cv.height;
      ctx.clearRect(0,0,W,H);
      ctx.globalCompositeOperation='lighter';
      puffs.forEach(function(p){
        p.age++;
        p.wob+=p.wobS;
        p.x+=p.vx+Math.sin(p.wob)*0.10;
        p.y+=p.vy+Math.cos(p.wob*1.2)*0.12;
        var t=p.age/p.life;
        var env=t<0.15?t/0.15:(t>0.85?(1-t)/0.15:1);
        p.a=p.peak*env*p.weight;
        for(var k=0;k<p.pieces;k++){
          var ang=k*(Math.PI*2/p.pieces)+p.wob*0.4;
          var dist=p.r*0.30*(0.6+0.4*Math.sin(p.wob+k));
          var px=p.x+Math.cos(ang)*dist;
          var py=p.y+Math.sin(ang)*dist*0.7;
          var pr=p.r*(0.55+0.18*Math.sin(p.wob*1.4+k));
          var g=ctx.createRadialGradient(px,py,0,px,py,pr);
          g.addColorStop(0,'rgba('+p.col+','+(p.a*0.9).toFixed(3)+')');
          g.addColorStop(0.5,'rgba('+p.col+','+(p.a*0.45).toFixed(3)+')');
          g.addColorStop(1,'rgba('+p.col+',0)');
          ctx.fillStyle=g;
          ctx.beginPath();ctx.arc(px,py,pr,0,Math.PI*2);ctx.fill();
        }
        if(p.age>p.life || p.x>W+p.r*1.6){
          var np=spawn();
          p.x=np.x; p.y=np.y; p.vx=np.vx; p.vy=np.vy;
          p.r=np.r; p.peak=np.peak; p.age=0; p.life=np.life;
          p.wob=np.wob; p.wobS=np.wobS; p.col=np.col; p.weight=np.weight;
          p.pieces=np.pieces;
        }
      });
      ctx.globalCompositeOperation='source-over';
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ── Entrance animation sequence ── */
  function runEntrance(){
    function ease(el,delay,extraStyle){
      setTimeout(function(){
        Object.assign(el.style,{transition:'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',opacity:1,transform:'translateY(0)'});
        if(extraStyle)Object.assign(el.style,extraStyle);
      },delay);
    }
    var logo=document.getElementById('logo-wrap');
    var eyebrow=document.getElementById('eyebrow');
    var headline=document.getElementById('headline');
    var w1=document.getElementById('h-word1');
    var w2=document.getElementById('h-word2');
    var w3=document.getElementById('h-word3');
    var w4=document.getElementById('h-word4');
    var cta=document.getElementById('cta-wrap');
    var scroll=document.getElementById('scroll-hint');
    if(logo)ease(logo,100);
    if(eyebrow)ease(eyebrow,460);
    if(headline){
      setTimeout(function(){headline.style.opacity=1;},680);
      [w1,w2,w3,w4].forEach(function(w,i){
        if(!w)return;
        var inner=w.children[0];
        setTimeout(function(){
          inner.style.transition='transform 1s cubic-bezier(0.16,1,0.3,1)';
          inner.style.transform='translateY(0)';
        },680+i*110);
      });
    }
    if(cta)ease(cta,1200);
    if(scroll){
      setTimeout(function(){
        scroll.style.transition='opacity 1s ease';
        scroll.style.opacity=1;
      },1800);
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){initBloom();initParticles();initSmoke();runEntrance();});
  }else{
    initBloom();initParticles();initSmoke();runEntrance();
  }
})();
` }} />
    </main>
  );
}