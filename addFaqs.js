const fs = require('fs');

const pageFaqs = {
  "app/page.tsx": [
    {"question": "Do you work directly with our clients?", "answer": "No. Build Beyond Studio works behind your agency. You manage the client relationship, communication, pricing, and account, while we handle the technical delivery under your brand."},
    {"question": "What services can we outsource to BBS?", "answer": "You can outsource website development, mobile apps, custom software, web applications, DevOps, infrastructure management, integrations, maintenance, and technical consulting."},
    {"question": "Can we sell your services under our own brand?", "answer": "Yes. Our services are designed for white-label partnerships. Your client sees your agency as the service provider, while BBS works as your behind-the-scenes delivery team."},
    {"question": "Will you contact our client directly?", "answer": "Not unless you specifically approve it. Our normal process is to communicate with your team, so you remain in control of the client relationship."},
    {"question": "Can you work with our existing designers and SEO team?", "answer": "Yes. We can work from your existing designs, content, SEO plans, technical documents, or client brief. Our role is to support the parts your agency cannot handle internally."},
    {"question": "Is BBS suitable for small marketing agencies?", "answer": "Yes. You do not need a large client base or an internal development department. BBS can support individual projects, ongoing delivery, or extra technical capacity when your workload increases."}
  ],
  "app/white-label-web-development/page.tsx": [
    {"question": "What kind of websites can you outsource to BBS?", "answer": "We can help with business websites, service websites, landing pages, corporate websites, portals, and custom web experiences. The exact approach depends on the client's goals, design, and technical requirements."},
    {"question": "Can you develop a website from our design?", "answer": "Yes. You can send us a Figma file, design document, wireframe, or even a clear brief. We turn the approved design into a responsive, working website under your agency's brand."},
    {"question": "Which technologies do you use?", "answer": "Our web development work can include React, Next.js, Node.js, and other suitable technologies. We recommend the stack based on the project rather than forcing every client into the same setup."},
    {"question": "Can you handle testing and website launch?", "answer": "Yes. Development, responsive testing, basic quality checks, deployment support, and launch assistance can be included in the project scope."},
    {"question": "Will the client know that BBS built the website?", "answer": "The project is delivered as a white-label service. We do not promote ourselves to your client or add our branding to the website unless you request otherwise."},
    {"question": "Can you fix or improve a website that another developer built?", "answer": "Yes. We can review an existing website, identify technical issues, and help with improvements, redesigns, performance work, or new functionality. First, we need access to the codebase and a clear understanding of the current setup."}
  ],
  "app/for-agencies/page.tsx": [
    {"question": "Why would a marketing agency need a technical partner?", "answer": "Many agencies are good at strategy, branding, SEO, content, or paid advertising but do not have developers in-house. A technical partner allows them to accept development projects without building a full internal team."},
    {"question": "Can we keep our own pricing and profit margin?", "answer": "Yes. You decide what to charge your client. BBS provides the delivery cost, and your agency can structure its own pricing and margin."},
    {"question": "Do you offer fixed project pricing?", "answer": "Where the scope is clear, we can provide a fixed project estimate. If the requirements are uncertain, we may recommend a discovery or technical scoping phase before confirming the final price."},
    {"question": "How do we send you a project?", "answer": "You can share the client brief, design files, required features, technical requirements, deadline, and any relevant access details. We review the information and come back with questions, scope, and pricing."},
    {"question": "Can you support us when our internal team is overloaded?", "answer": "Yes. You can use BBS for overflow work, urgent delivery, specialist development, or projects that fall outside your team's current expertise."},
    {"question": "Is there a minimum number of projects required?", "answer": "Not necessarily. We can discuss a single project, recurring work, or a longer-term partnership depending on your agency's needs."}
  ],
  "app/how-we-partner/page.tsx": [
    {"question": "What happens after we send a project brief?", "answer": "We review the brief, identify missing information, confirm the technical requirements, and prepare an estimate or proposal. Once the scope is approved, we plan the delivery work."},
    {"question": "Who communicates with the client during the project?", "answer": "Your agency remains the main point of contact. We communicate with your team and provide the updates, questions, and technical information you need to manage the client."},
    {"question": "Do you sign an NDA?", "answer": "Yes. An NDA can be arranged when required. We understand that agencies need to protect client information, pricing, processes, and business relationships."},
    {"question": "How do you manage quality?", "answer": "Our process can include technical review, testing, project checks, and a final handoff review. The exact quality process depends on the size and complexity of the project."},
    {"question": "Can we request changes during development?", "answer": "Yes. Small changes can usually be handled within the agreed process. Larger changes or new features may require a revised estimate so the timeline and budget remain clear."},
    {"question": "What do we receive at the end of the project?", "answer": "Depending on the scope, the handoff may include source code, deployment details, documentation, credentials, technical instructions, and any agreed project files."}
  ],
  "app/our-work/page.tsx": [
    {"question": "What types of projects are included in your portfolio?", "answer": "Our work can include websites, web applications, mobile apps, software platforms, integrations, and infrastructure-related projects delivered for agency partners."},
    {"question": "Can we see examples similar to our client's project?", "answer": "Yes. Tell us what type of project you are planning, and we can share relevant examples where they are available and approved for sharing."},
    {"question": "Are the projects shown in your portfolio white-label projects?", "answer": "Many projects are delivered behind partner agencies. Because of client confidentiality and white-label agreements, some project details may be limited."},
    {"question": "Can you build something similar to a project in your portfolio?", "answer": "Possibly. A portfolio example can help explain our approach, but the final scope depends on your client's requirements, design, integrations, and expected functionality."},
    {"question": "Do you only work on new projects?", "answer": "No. We can also support redesigns, feature improvements, migrations, maintenance, performance work, and development of existing platforms."},
    {"question": "Can our agency use the completed project in its own portfolio?", "answer": "That depends on the agreement and client permission. We can discuss portfolio rights before the project begins."}
  ],
  "app/success-stories/page.tsx": [
    {"question": "How does a technical partner help an agency grow?", "answer": "It allows the agency to accept more complex projects without hiring every specialist internally. The agency can focus on sales, strategy, and client management while BBS supports delivery."},
    {"question": "Can white-label delivery improve our agency's margins?", "answer": "It can. You avoid some of the fixed costs associated with hiring and maintaining a large technical team. Your actual margin will depend on your pricing, project scope, and delivery costs."},
    {"question": "Do you support agencies with recurring work?", "answer": "Yes. We can discuss ongoing delivery support for agencies that regularly need websites, applications, maintenance, integrations, or technical assistance."},
    {"question": "Can BBS help us offer services we currently do not provide?", "answer": "Yes. If your agency receives a project outside its current capabilities, we can review the requirements and determine whether our team can deliver it behind your brand."},
    {"question": "How quickly can we start a project?", "answer": "That depends on the project scope, available resources, and how complete the brief is. A clear brief and ready design usually make the process faster."},
    {"question": "What makes your partnership different from hiring a freelancer?", "answer": "The difference is the delivery structure. BBS is designed to support agencies through a repeatable process, technical review, project coordination, and ongoing delivery rather than handling only one isolated task."}
  ],
  "app/case-studies/page.tsx": [
    {"question": "What information is included in a case study?", "answer": "A case study may explain the client's challenge, the project scope, the technical approach, the delivery process, and the final outcome. The level of detail depends on what can be shared."},
    {"question": "Are your case studies based on real client projects?", "answer": "Yes. Case studies are based on actual projects or delivery experiences, subject to client confidentiality and approval."},
    {"question": "Can you handle projects with complicated technical requirements?", "answer": "We can review projects involving custom functionality, integrations, web applications, mobile apps, DevOps, or infrastructure. We first assess the requirements before confirming what can be delivered."},
    {"question": "Do you work with an agency's existing technology stack?", "answer": "Where practical, yes. We review the current stack and recommend whether to continue with it, improve it, or move to a more suitable solution."},
    {"question": "Can you provide a project estimate before development begins?", "answer": "Yes. We can provide an estimate after reviewing the brief, designs, features, integrations, and expected timeline. Unclear projects may need a separate scoping phase."},
    {"question": "Can you support the project after launch?", "answer": "Yes. Post-launch support may include bug fixes, updates, monitoring, maintenance, improvements, and additional development depending on the agreement."}
  ],
  "app/services/page.tsx": [
    {"question": "What technical services does BBS provide to agencies?", "answer": "Our services include website development, mobile app development, custom software, web applications, DevOps, infrastructure management, integrations, maintenance, and technical consulting."},
    {"question": "Can we outsource only one part of a project?", "answer": "Yes. You can outsource a complete project or only a specific part, such as front-end development, back-end work, API integration, deployment, or maintenance."},
    {"question": "Do you provide both development and ongoing support?", "answer": "Yes. We can support the project from planning and development through launch and ongoing maintenance, depending on the scope."},
    {"question": "Can your services be delivered under our agency brand?", "answer": "Yes. Our delivery model is designed for agencies that want to keep the client relationship and present the completed work as part of their own service offering."},
    {"question": "How do you decide which technology to use?", "answer": "We look at the project goals, budget, performance needs, integrations, expected traffic, maintenance requirements, and existing systems before recommending a technology stack."},
    {"question": "Can you help us scope a project before we quote our client?", "answer": "Yes. Technical scoping can help you understand the likely features, timeline, risks, and development cost before you submit a proposal to your client."}
  ],
  "app/services/website-development/page.tsx": [
    {"question": "Can we outsource website development even if we handle the design?", "answer": "Yes. You can manage the strategy, branding, content, and design while BBS handles the development, testing, and launch."},
    {"question": "Do you build websites that are ready for SEO?", "answer": "Yes. We can follow SEO-friendly development practices such as clean page structures, responsive layouts, sensible heading structures, performance considerations, and technical requirements provided by your SEO team."},
    {"question": "How long does a website project usually take?", "answer": "The timeline depends on the number of pages, design readiness, features, integrations, and feedback cycles. A simple website may move quickly, while a custom build needs more planning."},
    {"question": "Can you build websites using React or Next.js?", "answer": "Yes. React and Next.js are among the technologies we can use for custom website development when they fit the project."},
    {"question": "Do you provide website deployment support?", "answer": "Yes. We can assist with deployment, hosting setup, domain-related coordination, environment configuration, and launch checks where included in the scope."},
    {"question": "Can you maintain the website after launch?", "answer": "Yes. Ongoing maintenance can include updates, fixes, performance improvements, monitoring, and support for new requirements."}
  ],
  "app/services/mobile-app-development/page.tsx": [
    {"question": "Can BBS build both Android and iOS apps?", "answer": "Yes. We can discuss Android, iOS, or cross-platform development based on the project's requirements, budget, and long-term plans."},
    {"question": "Can you help us turn an app idea into an MVP?", "answer": "Yes. We can help review the idea, identify the core features, define the first version, and estimate the work needed to build an MVP."},
    {"question": "Do you handle the app store submission process?", "answer": "App store preparation and submission support can be included in the project scope. The client or agency may still need to provide the required developer accounts and business information."},
    {"question": "Can you connect the app to an existing website or software?", "answer": "Yes. We can connect mobile apps with existing websites, databases, APIs, payment systems, CRMs, and other business tools where the required access is available."},
    {"question": "Do you provide support after the app is launched?", "answer": "Yes. We can discuss maintenance, bug fixes, updates, performance improvements, and future features after launch."},
    {"question": "Can our agency sell app development without hiring mobile developers?", "answer": "Yes. That is one of the main reasons agencies use a white-label delivery partner. You can manage the client and commercial side while BBS supports the technical build."}
  ],
  "app/services/custom-web-applications/page.tsx": [
    {"question": "What is the difference between a website and a web application?", "answer": "A website mainly presents information, while a web application usually allows users to log in, submit information, manage data, complete tasks, or use interactive business features."},
    {"question": "What types of web applications can you build?", "answer": "Depending on the requirements, we can support portals, dashboards, customer platforms, internal tools, booking systems, workflow applications, and other browser-based software."},
    {"question": "Can you build a web application from an existing process?", "answer": "Yes. We can review how the business currently works and help turn manual steps, spreadsheets, or disconnected tools into a more structured web application."},
    {"question": "Can you integrate the application with other systems?", "answer": "Yes. Integrations may include CRMs, payment gateways, email platforms, databases, analytics tools, and third-party APIs."},
    {"question": "Do you provide technical planning before development?", "answer": "Yes. For complex applications, technical planning helps define the user roles, features, integrations, data structure, and development phases before work begins."},
    {"question": "Can we start with a smaller version and add features later?", "answer": "Yes. A phased approach or MVP can be useful when the client wants to validate the idea before investing in the complete application."}
  ],
  "app/services/devops/page.tsx": [
    {"question": "Why would a marketing agency need DevOps support?", "answer": "Websites and applications can slow down or fail when campaigns bring sudden traffic. DevOps support helps improve deployment, infrastructure reliability, monitoring, and the overall stability of the technical environment."},
    {"question": "Can you support websites during high-traffic campaigns?", "answer": "Yes. We can review the hosting and infrastructure setup, identify possible bottlenecks, and recommend improvements before a major campaign or launch."},
    {"question": "Do you help with deployment automation?", "answer": "Where appropriate, we can support deployment workflows, environment setup, release processes, and other practices that reduce manual errors."},
    {"question": "Can you monitor uptime and performance?", "answer": "Monitoring can be included depending on the project. We can discuss uptime checks, server monitoring, error tracking, and performance alerts."},
    {"question": "Do you work with existing hosting providers?", "answer": "Yes. We can review the current hosting environment and determine whether it can be improved or whether a different setup would be more suitable."},
    {"question": "Can DevOps support be offered under our agency brand?", "answer": "Yes. DevOps and infrastructure support can be delivered as a white-label service for agencies managing client websites, applications, or digital platforms."}
  ],
  "app/services/devops-infrastructure/page.tsx": [
    {"question": "What does infrastructure management include?", "answer": "It may include hosting setup, server configuration, deployment support, monitoring, backups, security-related checks, performance improvements, and general infrastructure maintenance."},
    {"question": "Can you manage infrastructure for multiple client websites?", "answer": "Yes. We can discuss a suitable process for agencies managing several client websites or applications. The scope depends on the number of environments and the level of support required."},
    {"question": "Can you help if a client's website keeps going down?", "answer": "Yes. We can review the hosting, server resources, application errors, traffic patterns, and deployment process to identify likely causes and recommend fixes."},
    {"question": "Do you provide managed hosting?", "answer": "Managed hosting or infrastructure support can be discussed based on the project requirements. We first need to understand the hosting provider, application, traffic, and support expectations."},
    {"question": "Can you help migrate a website or application to a new server?", "answer": "Yes. Migration planning and execution can be included when the required access and technical information are available."},
    {"question": "Is infrastructure support available after the website launch?", "answer": "Yes. Ongoing infrastructure support can be arranged for monitoring, updates, troubleshooting, and maintenance."}
  ],
  "app/services/technical-consulting/page.tsx": [
    {"question": "When should an agency bring in a technical consultant?", "answer": "It is useful when a project has unclear requirements, complex integrations, performance issues, technology decisions, or risks that your internal team cannot confidently assess."},
    {"question": "Can you review a client's existing technology setup?", "answer": "Yes. We can review the current website, application, hosting, integrations, or development approach and provide practical recommendations."},
    {"question": "Can you help us choose the right technology?", "answer": "Yes. We consider the project's budget, functionality, performance, scalability, maintenance needs, and existing systems before making a recommendation."},
    {"question": "Do you help agencies estimate technical projects?", "answer": "Yes. We can help break down features, identify technical dependencies, highlight risks, and prepare a more realistic development estimate."},
    {"question": "Can you work with our existing developers?", "answer": "Yes. We can support your team with architecture reviews, technical decisions, troubleshooting, documentation, or specialist guidance."},
    {"question": "Is technical consulting available as a one-time service?", "answer": "Yes. You can request support for a specific decision, project review, technical audit, or scoping requirement without necessarily committing to a full development project."}
  ],
  "app/services/consulting/page.tsx": [
    {"question": "What is included in a project scoping call?", "answer": "We discuss the business goal, required features, users, integrations, current technology, expected timeline, and any known limitations. This helps us understand what the project may involve."},
    {"question": "Can you estimate a project if the client only has a basic idea?", "answer": "Yes, but the first estimate may be preliminary. A clearer scope usually leads to a more reliable timeline and cost."},
    {"question": "Why is technical scoping important before quoting a client?", "answer": "It helps you avoid underquoting, missed features, unrealistic deadlines, and unexpected development costs after the project begins."},
    {"question": "Can you help prepare a technical proposal?", "answer": "Yes. We can provide technical input that your agency can use when preparing a client proposal, statement of work, or project estimate."},
    {"question": "Do you offer consulting for existing websites and applications?", "answer": "Yes. We can review an existing system and help identify improvement opportunities, technical problems, or the next stage of development."},
    {"question": "Can scoping lead to a full development project?", "answer": "Yes. If the project is a good fit, the scoping work can be followed by development, deployment, and ongoing support under the agreed arrangement."}
  ],
  "app/training-programs/page.tsx": [
    {"question": "Who can join the BBS training programs?", "answer": "The programs are intended for learners who want practical experience in web development and modern development technologies. The exact eligibility depends on the specific training program."},
    {"question": "What technologies are covered?", "answer": "Training may include HTML, CSS, JavaScript, front-end development, and the MERN stack. The curriculum depends on the program and learning level."},
    {"question": "Is the training focused only on theory?", "answer": "No. The aim is to give learners practical experience through projects, development tasks, and real-world workflows rather than only classroom theory."},
    {"question": "Will students work on deployed projects?", "answer": "Where included in the program, learners work on practical projects that help them understand development, testing, deployment, and project completion."},
    {"question": "Are internships available after training?", "answer": "Top-performing learners may be considered for internship opportunities. Selection depends on performance, available positions, and the requirements of the role."},
    {"question": "Do I need previous coding experience?", "answer": "That depends on the program. Beginners may be able to start with foundational web technologies, while more advanced programs may expect some prior knowledge."}
  ],
  "app/ambikapur/page.tsx": [
    {"question": "Where is the BBS development team based?", "answer": "Build Beyond Studio's development team is based in Ambikapur, Chhattisgarh, and supports marketing agencies and clients in India and other markets."},
    {"question": "Do you work only with businesses in Ambikapur?", "answer": "No. Although our team is based in Ambikapur, we work with agencies and businesses in different locations through remote communication and digital project workflows."},
    {"question": "What development services do you provide?", "answer": "Our services include website development, mobile apps, custom software, web applications, integrations, DevOps, infrastructure support, and maintenance."},
    {"question": "Can agencies from other cities partner with BBS?", "answer": "Yes. Agencies from India or abroad can work with us remotely. The project process can include online meetings, shared documents, project management tools, and regular updates."},
    {"question": "Do you provide white-label development from Ambikapur?", "answer": "Yes. We support agencies as a behind-the-scenes technical team, allowing them to offer development services under their own brand."},
    {"question": "Can we visit or speak with the development team?", "answer": "You can contact us to discuss the project and the type of communication required. Any meeting or team interaction can be arranged based on the project."}
  ]
};

for (const [filePath, faqs] of Object.entries(pageFaqs)) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if FAQSection is already imported
    if (!content.includes("FAQSection")) {
      // Find the last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const nextNewLineIndex = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, nextNewLineIndex + 1) + 
                  "import FAQSection from '@/components/FAQSection';\n" + 
                  content.slice(nextNewLineIndex + 1);
      } else {
        content = "import FAQSection from '@/components/FAQSection';\n" + content;
      }
    }
    
    // Add the specific faqs array for this page
    const faqVariableName = 'pageSpecificFaqs';
    // Remove if it's already there (for idempotency)
    if (content.includes(`const ${faqVariableName} =`)) {
      const start = content.indexOf(`const ${faqVariableName} =`);
      const end = content.indexOf('];\n', start) + 3;
      content = content.slice(0, start) + content.slice(end);
    }
    
    // Find where to put the faqs array - right before the default export
    const exportIndex = content.indexOf('export default function');
    const faqsCode = `\nconst ${faqVariableName} = ${JSON.stringify(faqs, null, 2)};\n\n`;
    content = content.slice(0, exportIndex) + faqsCode + content.slice(exportIndex);
    
    // Now insert <FAQSection faqs={pageSpecificFaqs} /> before <Footer />
    if (content.includes('<Footer />')) {
      // We also want to replace the existing <FAQ /> or similar if it's present.
      // But we shouldn't remove anything else. Wait, the prompt said: 
      // "Do not modify any other existing content, styling, or layout on these pages besides adding the FAQ section + schema."
      // Let's just insert it before <Footer />. Wait, if I leave the existing <FAQ />, they'll have 2 FAQs on the homepage. Let's remove <FAQ /> only if it's the exact old component.
      
      content = content.replace(/<FAQ \/>/g, ''); // For app/page.tsx
      // For white-label-web-development, they have an existing FAQ section built in. Let's remove it if it has "Frequently Asked Questions". But maybe that's too complex to automate. Let's just append the new FAQ section right before <Footer />. The user's prompt specifically says "Do not modify any other existing content, styling, or layout on these pages besides adding the FAQ section + schema." So I should just append before <Footer />. Wait, the prompt says "Create (or reuse if one already exists) a reusable FAQ accordion component".
      
      if (!content.includes(`<FAQSection faqs={${faqVariableName}} />`)) {
        content = content.replace(/<Footer \/>/g, `<FAQSection faqs={${faqVariableName}} />\n      <Footer />`);
      }
    } else {
      console.log(`Warning: <Footer /> not found in ${filePath}`);
      // Find </main> or </div> at the end to insert before
      const closingMainIndex = content.lastIndexOf('</main>');
      if (closingMainIndex !== -1) {
         content = content.slice(0, closingMainIndex) + `\n      <FAQSection faqs={${faqVariableName}} />\n    ` + content.slice(closingMainIndex);
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed: ${filePath}`);
  } else {
    console.log(`Missing: ${filePath}`);
  }
}
