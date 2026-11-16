// Edit your details here. The layout in index.html stays the same.
const resume = {
  name: "Priten Prajapati",
  tagline: "Business | Marketing | Growth Enthusiast",
  about: [
    "I'm always curious to learn new things and genuinely enjoy business, marketing and growth-focused work.",
    "I like interacting with people, understanding how they think, and finding ways to improve conversions and sales. Outside academics and work, I enjoy staying active through running and gym."
  ],
  experience: [
    { role: "Social Media Intern", org: "Sam's Cafe, Ahmedabad", when: "May – June 2026",
      points: ["Shot Instagram reels and explored new content ideas.",
               "Planned social media content and responded to customer messages.",
               "Contributed to the growth of the café's Instagram account."] },
    { role: "Social Media Volunteer", org: "Mahipatsinh Foundation", when: "2025 – 2026",
      points: ["Worked with a volunteer team of approximately 10–12 people.",
               "Planned Instagram content and responded to social media messages.",
               "Helped plan and coordinate events supporting the foundation's work in education and assistance for underprivileged people."] }
  ],
  education: [
    { role: "BBA in Digital Business and Entrepreneurship", org: "IIM Bangalore" },
    { role: "IMBA in Digital Marketing and Analytics", org: "BK School of Professional and Management Studies" }
  ],
  achievement: [
    { role: "Silver Medal, Badminton (Singles)", org: "District level", when: "2023",
      points: ["Represented Panchmahal District."] }
  ],
  exploring: ["Digital Marketing", "Entrepreneurship", "Business Growth", "Consumer Behaviour", "Business Analytics & AI"],
  hobbies: ["Running. Gym. Badminton.", "Always learning, always moving."],
  contact: [
    { label: "Email", text: "prajapatipriten2969@gmail.com", href: "mailto:prajapatipriten2969@gmail.com" },
    { label: "Institute email", text: "priten.prajapati26@iimb.ac.in", href: "mailto:priten.prajapati26@iimb.ac.in" },
    { label: "Phone", text: "+91 75729 36694", href: "tel:+917572936694" },
    { label: "Instagram", text: "@pritenprajapati_", href: "https://instagram.com/pritenprajapati_" }
  ]
};

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

$("r-name").textContent = resume.name;
$("r-tagline").textContent = resume.tagline;

["About", "Experience", "Education", "Achievement", "Exploring", "Hobbies", "Contact"].forEach((s) => {
  const a = el("a", "", s); a.href = "#" + s.toLowerCase(); $("r-nav").appendChild(a);
});

resume.about.forEach((t) => $("r-about").appendChild(el("p", "", t)));
resume.hobbies.forEach((t) => $("r-hobbies").appendChild(el("p", "", t)));
resume.exploring.forEach((t) => $("r-exploring").appendChild(el("span", "skill-tag", t)));

function cards(target, items) {
  items.forEach((it) => {
    const card = el("article", "card");
    const top = el("div", "card-top");
    const left = el("div");
    left.appendChild(el("h3", "", it.role));
    left.appendChild(el("p", "org", it.org));
    top.appendChild(left);
    if (it.when) top.appendChild(el("span", "when", it.when));
    card.appendChild(top);
    if (it.points) {
      const ul = el("ul", "points");
      it.points.forEach((p) => ul.appendChild(el("li", "", p)));
      card.appendChild(ul);
    }
    $(target).appendChild(card);
  });
}
cards("r-experience", resume.experience);
cards("r-education", resume.education);
cards("r-achievement", resume.achievement);

resume.contact.forEach((c) => {
  const li = el("li");
  li.appendChild(el("span", "label", c.label));
  const a = el("a", "", c.text); a.href = c.href;
  if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
  li.appendChild(a);
  $("r-contact").appendChild(li);
});
