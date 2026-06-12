# rootxcyberblogs

A personal cybersecurity blog by **Angad Singh** — Cybersecurity Specialist, Penetration Tester, and Ethical Hacker.

Live at: [rootxcyberblogs.github.io](https://rootxcyberblogs.github.io)

---

## About the blog

This is a technical writing space — not a portfolio, not a showcase. Every post comes from real engagement experience: vulnerabilities found during actual penetration tests, network security projects, and hands-on research. The goal is to document findings in enough depth that they're useful to other security practitioners, not just proof that the work happened.

Posts focus on the *why* behind a vulnerability and the *how* behind exploiting and fixing it — not just a list of steps.

---

## Areas covered

**Web Application Security**
- OWASP Top 10 vulnerabilities in real-world contexts
- Authentication and authorisation bypass (OTP bypass, session manipulation)
- Injection attacks — SQL injection, stored/reflected XSS
- Insecure Direct Object Reference (IDOR) across REST and GraphQL APIs
- Business logic flaws and access control failures
- API security testing — GraphQL, REST, Postman-based analysis

**OSINT and Reconnaissance**
- Google dorking and advanced search operator techniques
- Subdomain enumeration and attack surface mapping
- Passive recon methodologies using Shodan, Maltego, Amass, and Sublist3r
- Information leakage — exposed files, misconfigured directories, verbose errors

**Network and Infrastructure Security**
- Layer 2 attack demonstrations and mitigations (ARP spoofing, rogue DHCP)
- DHCP snooping, Dynamic ARP Inspection, and port security on Cisco switches
- Firewall configuration and network segmentation
- Vulnerability assessment and infrastructure hardening

**Tools and Techniques**
- Burp Suite workflows for web application testing
- SQLMap, Nikto, Nmap usage in structured assessments
- Wireshark for traffic analysis and attack validation
- Python and Bash scripting for security automation
- Report writing and vulnerability documentation

**CTF Writeups**
- TryHackMe room walkthroughs
- HackerOne report breakdowns (sanitised)
- Methodology notes from competition-style challenges

---

## Structure

```
rootxcyberblogs/
├── index.html          ← post index
├── about.html          ← background and contact
├── posts/              ← individual post pages
│   ├── sqli-union-attack.html
│   ├── idor-graphql.html
│   ├── otp-bypass-auth.html
│   ├── google-dorking-recon.html
│   ├── stored-xss-crm.html
│   └── dhcp-snooping-mitm.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── README.md
```

---

## Adding a new post

1. Copy any existing file in `posts/` as a template
2. Update the title, date, tag, and content
3. Add a matching `<article class="post-card">` block in `index.html`
4. Commit and push — GitHub Pages deploys automatically

Post tags available: `web`, `api`, `osint`, `infra`, `ctf`

---

## Tech

Pure static HTML, CSS, and vanilla JavaScript. No build tools, no dependencies, no frameworks. Hosted on GitHub Pages.

Fonts: DM Serif Display (post titles) · Inter (body) · Share Tech Mono (code and nav)

---

## Connect

- LinkedIn: [angadsinghchandhok](https://www.linkedin.com/in/angadsinghchandhok/)
- GitHub: [midgetpool](https://github.com/midgetpool)
- HackerOne: 11 reports submitted

---

*All vulnerability details published here are from authorised engagements or disclosed through responsible disclosure processes. Nothing on this blog facilitates or encourages unauthorised access.*
