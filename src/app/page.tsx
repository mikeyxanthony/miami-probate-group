"use client";
import { useEffect, useRef } from "react";

function WordReveal({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <span ref={ref} className="word-reveal">{text.split(" ").map((w,i,a)=><span key={i}>{w}{i<a.length-1?" ":""}</span>)}</span>;
}

const A="#3B3069",B="#D4D2C9",BG="#F4F3EE",INK="#1A1A18",MU="#4A4A44",LB="#6B6B65";
const S="'Instrument Serif',Georgia,serif";
const stats=[{v:"1,800+",l:"Probate Cases Closed"},{v:"94%",l:"Resolved Without Trial"},{v:"18 mo",l:"Avg. Faster Than Unrepresented"},{v:"$620M+",l:"Estates Administered"}];
const services=[
  {t:"Formal Probate Administration",b:"We manage the full probate process: filing petitions, notifying creditors, inventorying assets, resolving claims, and distributing the estate."},
  {t:"Summary Administration",b:"For estates under $75,000 or where the decedent died more than two years ago. We assess eligibility and execute efficiently."},
  {t:"Ancillary Probate",b:"Owns Florida property but domiciled out-of-state? We handle ancillary proceedings to transfer real property held in Florida."},
  {t:"Will Contests & Litigation",b:"When a will is disputed — undue influence, lack of capacity, or fraud — we represent both challengers and defenders with aggressive strategy."},
  {t:"Creditor Claims Defense",b:"Creditors have a limited window to file claims. We enforce deadlines, challenge improper claims, and protect your beneficiaries' inheritance."},
  {t:"Trust Administration",b:"Advising successor trustees through fiduciary duties: accountings, beneficiary communications, distributions, and tax filings per Florida Statute 736."},
];
const process=[
  {n:"01",t:"Free Case Review",b:"We evaluate the estate, identify probate requirements, and give you a clear roadmap and fee estimate."},
  {n:"02",t:"Court Filing",b:"We prepare and file all petitions, publish notices, and notify creditors within statutory deadlines."},
  {n:"03",t:"Asset & Claim Management",b:"We inventory assets, challenge improper creditor claims, and resolve disputes."},
  {n:"04",t:"Distribution & Closing",b:"We prepare final accountings, execute distributions, and file the court closing order."},
];
const testimonials=[
  {q:"My siblings hired separate attorneys and things got contentious fast. Miami Probate Group stepped in, mediated the conflict, and got the estate closed in four months.",n:"Elena C.",r:"Estate Beneficiary, Doral"},
  {q:"We had a contested will with a forged signature claim. Their litigation team handled every detail. We won.",n:"Thomas B.",r:"Estate Executor"},
  {q:"Twelve creditor claims were filed against my father's estate. They reduced the total payout by over 60%.",n:"Mariana S.",r:"Coconut Grove"},
];
const faqs=[
  {q:"How long does probate take in Florida?",a:"Formal administration typically takes 9–18 months. Summary administration can be completed in 4–8 weeks if the estate qualifies."},
  {q:"Do all assets have to go through probate?",a:"No. Assets with designated beneficiaries transfer automatically. Only assets titled solely in the decedent's name require probate."},
  {q:"Can a will be contested after admission to probate?",a:"Yes, but within strict timelines. Florida law generally requires objections within 90 days of being served notice."},
  {q:"What are your fees?",a:"Florida law establishes reasonable compensation rates based on estate value. We provide full fee disclosure at intake and offer flat-fee arrangements for qualifying estates."},
];

export default function Home() {
  return (
    <div style={{backgroundColor:BG,color:INK}}>
      <nav style={{position:"sticky",top:0,zIndex:50,backgroundColor:BG,borderBottom:`1px solid ${B}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 3rem"}}>
        <div style={{fontFamily:S,fontSize:"1.2rem"}}>Miami <em>Probate Group</em></div>
        <div style={{display:"flex",gap:"2rem",fontSize:"0.875rem"}}>
          {[["Services","services"],["Process","process"],["Results","testimonials"],["FAQ","faq"]].map(([l,h])=><a key={l} href={`#${h}`} style={{color:INK,textDecoration:"none"}}>{l}</a>)}
        </div>
        <a href="#contact" style={{backgroundColor:A,color:BG,padding:"0.625rem 1.25rem",fontSize:"0.875rem",textDecoration:"none"}}>Speak to an Attorney</a>
      </nav>

      <section style={{padding:"6rem 3rem 5rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.12em",color:A,marginBottom:"1.5rem"}}>Probate Law · Miami-Dade &amp; Broward</p>
        <h1 style={{fontFamily:S,fontSize:"clamp(2.8rem,6vw,5.5rem)",lineHeight:1.08,fontWeight:400}}>
          <WordReveal text="Probate doesn't have" /><br/>
          <em><WordReveal text="to take years." /></em>
        </h1>
        <p style={{marginTop:"2rem",maxWidth:"36rem",fontSize:"1rem",lineHeight:1.75,color:MU}}>Miami Probate Group guides executors, trustees, and beneficiaries through Florida&apos;s probate system with speed, precision, and strategic creditor defense.</p>
        <div style={{marginTop:"2.5rem",display:"flex",gap:"1rem",flexWrap:"wrap"}}>
          <a href="#contact" style={{backgroundColor:A,color:BG,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>Get a Free Case Review →</a>
          <a href="#services" style={{border:`1px solid ${B}`,color:INK,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>Our Practice Areas</a>
        </div>
      </section>

      <section style={{padding:"4rem 3rem",borderBottom:`1px solid ${B}`}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {stats.map(s=>(
            <div key={s.v} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <div className="metric" style={{fontSize:"clamp(2rem,4vw,3rem)",color:A,marginBottom:"0.5rem"}}>{s.v}</div>
              <div style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.1em",color:LB}}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <div style={{marginBottom:"3.5rem"}}>
          <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"1rem"}}>Practice Areas</p>
          <h2 style={{fontFamily:S,fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:400,lineHeight:1.12}}>Every stage of<br/><em>probate. Handled.</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {services.map(s=>(
            <div key={s.t} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <h3 style={{fontFamily:S,fontSize:"1.3rem",fontWeight:400,marginBottom:"0.75rem"}}>{s.t}</h3>
              <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`,backgroundColor:"#EFEDE6"}}>
        <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"3.5rem"}}>How It Works</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {process.map(p=>(
            <div key={p.n} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`,backgroundColor:BG}}>
              <div className="metric" style={{fontSize:"2rem",color:A,marginBottom:"1rem"}}>{p.n}</div>
              <h3 style={{fontFamily:S,fontSize:"1.1rem",fontWeight:400,marginBottom:"0.5rem"}}>{p.t}</h3>
              <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"3rem"}}>Client Results</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",border:`1px solid ${B}`,borderRight:"none",borderBottom:"none"}}>
          {testimonials.map(t=>(
            <div key={t.n} style={{padding:"2rem",borderRight:`1px solid ${B}`,borderBottom:`1px solid ${B}`}}>
              <p style={{fontFamily:S,fontStyle:"italic",fontSize:"1rem",lineHeight:1.75,marginBottom:"1.5rem"}}>&ldquo;{t.q}&rdquo;</p>
              <p style={{fontSize:"0.875rem",fontWeight:500}}>{t.n}</p>
              <p style={{fontSize:"0.75rem",color:LB,marginTop:"0.25rem"}}>{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" style={{padding:"5rem 3rem",borderBottom:`1px solid ${B}`}}>
        <p style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:LB,marginBottom:"3rem"}}>Common Questions</p>
        <div style={{maxWidth:"48rem"}}>
          {faqs.map((f,i)=>(
            <div key={i} style={{padding:"1.75rem 0",borderBottom:`1px solid ${B}`}}>
              <p style={{fontFamily:S,fontSize:"1.1rem",fontWeight:400,marginBottom:"0.5rem"}}>{f.q}</p>
              <p style={{fontSize:"0.875rem",lineHeight:1.75,color:MU}}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding:"6rem 3rem",backgroundColor:A,textAlign:"center"}}>
        <div style={{maxWidth:"40rem",margin:"0 auto",color:BG}}>
          <h2 style={{fontFamily:S,fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:400,lineHeight:1.1}}>Every day matters<br/><em>in probate.</em></h2>
          <p style={{marginTop:"1.5rem",fontSize:"0.875rem",lineHeight:1.75,opacity:0.8}}>Florida imposes strict deadlines for probate filings and creditor responses. Free case reviews available same day.</p>
          <div style={{marginTop:"2.5rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="tel:+13055550277" style={{backgroundColor:BG,color:A,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none",fontWeight:500}}>(305) 555-0277</a>
            <a href="mailto:intake@miamiprobategroup.com" style={{border:"1px solid rgba(244,243,238,0.4)",color:BG,padding:"0.875rem 1.75rem",fontSize:"0.875rem",textDecoration:"none"}}>intake@miamiprobategroup.com</a>
          </div>
        </div>
      </section>

      <footer style={{padding:"2rem 3rem",borderTop:`1px solid ${B}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.75rem",color:LB}}>
        <div style={{fontFamily:S,fontSize:"1rem",color:INK}}>Miami <em>Probate Group</em></div>
        <p>© 2026 Miami Probate Group, P.A. · Florida Bar · Attorney Advertising</p>
        <p>Miami-Dade · Broward</p>
      </footer>
    </div>
  );
}
