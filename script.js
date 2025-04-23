
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyD9heIMpfWmIICu1wavpNDcKj5jeqyIMfk",
  authDomain: "collegereadyez.firebaseapp.com",
  projectId: "collegereadyez",
  storageBucket: "collegereadyez.firebasestorage.app",
  messagingSenderId: "920490409207",
  appId: "1:920490409207:web:05a85a62fecbcc0a8727f2",
  measurementId: "G-R40LB4WRP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Save a task
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

async function saveTaskToFirebase(task, userId) {
  await setDoc(doc(db, "users", userId, "tasks", task.id), task);
}



document.addEventListener('DOMContentLoaded', function() {
    localStorage.removeItem('collegePrepTasks');
    localStorage.removeItem('collegePrepDeletedTasks');
    initializeTasks();
    
    document.getElementById('add-task-form').addEventListener('submit', addCustomTask);
    document.getElementById('toggle-completed').addEventListener('click', toggleCompletedTasks);
    document.getElementById('toggle-deleted').addEventListener('click', toggleDeletedTasks);
    
    checkDueSoonTasks();
});

const allTasks = [
    {
        category: "JUNIOR YEAR (11th Grade) - Winter (January to March)",
        title: "Research & Plan",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Start researching colleges</strong> based on:
                <li><strong>Factors to Consider When Deciding on a College:</strong>
                    <ul>
                        <li><strong>Academic Programs:</strong> Availability and quality of desired majors or courses.</li>
                        <li><strong>Location:</strong> Proximity to home, urban or rural setting, climate, etc.</li>
                        <li><strong>Cost:</strong> Tuition, fees, living expenses, and financial aid options.</li>
                        <li><strong>Campus Life:</strong> Extracurricular activities, housing, student organizations, etc.</li>
                        <li><strong>Reputation:</strong> Accreditation, faculty qualifications, alumni success, etc.</li>
                        <li><strong>Class Sizes:</strong> Student-to-faculty ratio and average class size.</li>
                        <li><strong>Personal Preferences:</strong> Cultural fit, diversity, special needs accommodations, etc.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Make a spreadsheet</strong> or use the <a href="collegready_application-excel.xlsx" target="_blank"><strong>CollegeReady EZ Sheet</strong></a> to track colleges, deadlines, requirements, and fees.</li>
                <li><strong>Attend</strong> virtual/in-person <strong>college fairs and information sessions</strong>.</li>
                <br>
            </ul>`,
        dueDate: "2025-03-31",
        duration: 10,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Winter (January to March)",
        title: "Test Prep (if needed)",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Register for the SAT/ACT</strong> (first attempt around March–May):
                    <ul>
                        <li><a href="https://satsuite.collegeboard.org/sat/registration" target="_blank">SAT Registration</a></li>
                        <li><a href="https://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">ACT Registration</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Study using</strong> prep books, <a href="https://www.khanacademy.org/digital-sat" target="_blank">Khan Academy</a>, or tutoring.</li>
                <br>
                <li><strong>Practice Test Resources:</strong>
                    <ul>
                        <li><a href="https://satsuite.collegeboard.org/practice/practice-tests/paper" target="_blank">SAT Practice Test Papers</a></li>
                        <li><a href="https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html" target="_blank">ACT Practice Test Papers</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>AP Testing:</strong>
                    <ul>
                        <li>Depending on the classes you took, you should start reviewing now.</li>
                        <li>This can be done in class, by yourself, or with friends.</li>
                        <li><strong>We recommend:</strong>
                            <ul>
                                <li>Reviewing the material</li>
                                <li>Practicing using previous years' exams</li>
                                <li>Reminding yourself that test scores may be important, <strong>but they do not define you!</strong></li>
                            </ul>
                        </li>
                        <li><a href="https://apstudents.collegeboard.org/register-for-ap-exams" target="_blank"><strong>Link to Apply for AP Testing</strong></a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "",
        duration: 5,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Winter (January to March)",
        title: "Resume Drafting",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Start drafting a resume</strong> to showcase your achievements. Keep it <strong>simple and to the point</strong>—it doesn't need to be fancy.</li>
                <br>
                <li><strong>What to include on your resume:</strong>
                    <ul>
                        <li><strong>Contact Information:</strong> Name, email, phone number, city/state, optional LinkedIn link</li>
                        <li><strong>Education:</strong> School name, GPA, graduation year, relevant coursework</li>
                        <li><strong>Leadership Roles:</strong> List any positions you've held in clubs, teams, or organizations. Briefly describe what you did.</li>
                        <li><strong>Awards and Honors:</strong> Mention academic, athletic, or personal awards you've earned.</li>
                        <li><strong>Volunteer Work:</strong> Include organizations you volunteered with and what tasks you performed.</li>
                        <li><strong>Extracurriculars:</strong> List sports, clubs, music, art, or other school/community activities.</li>
                        <li><strong>Certificates:</strong> Add any certifications you've received (e.g., CPR, coding, Microsoft Office).</li>
                        <li><strong>Projects:</strong> Mention school or personal projects that show your skills or initiative.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Resume Tips:</strong>
                    <ul>
                        <li>Keep it <strong>one page</strong></li>
                        <li>Use <strong>bullet points</strong> to describe roles and achievements</li>
                        <li>Be <strong>clear, action-oriented, and concise</strong></li>
                        <li>Use professional fonts like <strong>Arial</strong> or <strong>Times New Roman</strong> (size 10–12)</li>
                        <li><strong>Save as a PDF</strong> before uploading or submitting</li>
                    </ul>
                </li>
                <br>
                <li><strong>Helpful Resume Examples & Templates:</strong>
                    <ul>
                        <li><a href="https://resumegenius.com/blog/resume-help/resume-for-college-application" target="_blank">Resume Examples for College Applications – ResumeGenius</a></li>
                        <li><a href="https://templatelab.com/college-resumes/" target="_blank">College Resume Templates – TemplateLab</a></li>
                        <li><a href="https://templatelab.com/college-resumes/" target="_blank">Free Resume Templates – TemplateLab</a></li>
                        <li><a href="https://www.youtube.com/watch?v=yyKH9L5hzDc" target="_blank">Resume Tips Video for Students – YouTube</a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-03-31",
        duration: 3,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Spring (April to May)",
        title: "Testing & Academics (if needed)",
        details: `<h4>Details:</h4>
            <li><strong>Register (if you have not already) for the SAT/ACT!</strong> (2nd attempt in June-August):
                <ul>
                    <li><a href="https://satsuite.collegeboard.org/sat/registration" target="_blank">SAT Registration</a></li>
                    <li><a href="https://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">ACT Registration</a></li>
                </ul>
            </li>
            <li><strong>Practice Test Resources:</strong>
                <ul>
                    <li><a href="https://satsuite.collegeboard.org/practice/practice-tests/paper" target="_blank">SAT Practice Test Papers</a></li>
                    <li><a href="https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html" target="_blank">ACT Practice Test Papers</a></li>
                </ul>
            </li>
            <br>
            <li><strong>AP Testing (In May!!)</strong></ul>`,
        dueDate: "",
        duration: 7,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Spring (April to May)",
        title: "Letters of Recommendation",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Request letters of recommendation</strong> from two teachers. <br>Be sure to give them <strong>2–3 months' notice</strong> in advance.</li>
                <br>
                <li><strong>Who to ask?</strong>
                    <ul>
                        <li><strong>Choose someone who knows you well</strong> — not just your grades, but your character, effort, and growth.</li>
                        <li><strong>Taught you in junior or senior year.</strong></li>
                        <li><strong>Taught core subjects:</strong> English, math, science, history, or foreign language.</li>
                        <li><strong>OR</strong> a teacher from your intended major (e.g., a CS teacher for a CS major).</li>
                        <li><strong>Can speak to your strengths</strong> that are relevant to your college or scholarship applications.</li>
                    </ul>
                <br>
                <li><strong>How to ask?</strong>
                    <ul>
                        <li><strong>Ask in person</strong> and follow up with an email.</li>
                        <li><strong>Attach your resume</strong> in the email so they have context for your achievements.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Email Template:</strong><br>
                <pre>
Hello [Teacher's Name],

I hope you are well. I really enjoyed your class and learned a lot from 
you this year. 

I'm applying to colleges this fall and was wondering if you'd feel 
comfortable writing me a strong letter of recommendation? I have 
attached my resume!

I would need the letter by September/October. I just wanted to ask in 
advance.

Thank you for your time,
[Your Name]
</pre>

<strong>Follow-up Template:</strong><br>
<pre>
Hi [Teacher's Name],

Just following up on my previous email about the recommendation letter. 
Please let me know if you're able to write it.

If you need anything else from me, I'd be happy to provide it.

Thank you again,
[Your Name]
</pre>
                </li>
            </ul>`,
        dueDate: "2025-05-01",
        duration: 4,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Spring (April to May)",
        title: "College List",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Narrow down a balanced list</strong> of reach, match, and safety schools. This helps ensure you have great options no matter the outcome.</li>
                <br>
                <li><strong>Reach Schools:</strong>
                    <ul>
                        <li>Admission is <strong>highly competitive</strong>.</li>
                        <li>Your GPA and test scores are <strong>below or at the lower end</strong> of their average range.</li>
                        <li>Even strong students are not guaranteed admission.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Match Schools:</strong>
                    <ul>
                        <li>Your academic stats (GPA, test scores, etc.) <strong>match their admitted student average</strong>.</li>
                        <li>You have a <strong>good chance of getting in</strong> if the rest of your application is strong.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Safety Schools:</strong>
                    <ul>
                        <li>Your academic profile is <strong>well above their average admitted students' stats</strong>.</li>
                        <li>You're <strong>very likely to be admitted</strong>.</li>
                    </ul>
                </li>
                <br>
                <li><strong>Helpful Tool:</strong><br>
                Use the <a href="collegready_application-excel.xlsx" target="_blank"><strong>CollegeReady EZ's College Management Excel Sheet</strong></a> to organize and track your college list.</li>
            </ul>`,
        dueDate: "2025-05-31",
        duration: 6,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Spring (April to May)",
        title: "Financial Aid Prep",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Talk with your parent(s)/guardian(s)</strong> about preparing for the FAFSA.<br>Ask if they have the required <strong>tax and income documents</strong> for the most recent tax year.
                <li><a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank">Start or Fill Out the FAFSA</a></li>
                <li><a href="https://www.youtube.com/watch?v=Y8nfk5ApcQ4" target="_blank">FAFSA How-To Video</a></li>
                </ul>
            </li>
            </ul>`,
        dueDate: "2025-05-31",
        duration: 2,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Summer (June to August)",
        title: "College Applications Setup",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Create a Common App account:</strong>
                    <ul>
                        <li><a href="https://www.commonapp.org/" target="_blank">Common App Website</a></li>
                        <li><a href="https://www.commonapp.org/apply/first-time-students" target="_blank">Step-by-Step Guide</a></li>
                        <li><a href="https://www.youtube.com/watch?v=HbslwwZr6c0" target="_blank">Video Tutorial</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Use Common App to:</strong>
                    <ul>
                        <li>Add colleges to your list</li>
                        <li>Fill out personal and academic information</li>
                        <li>Submit your Common App essay (if required)</li>
                        <li>Request recommendation letters</li>
                        <li>Track deadlines and application status</li>
                    </ul>
                </li>
                <br>
                <li><strong>Sign into Naviance</strong> (if your school uses it):
                    <ul>
                        <li><a href="https://student.naviance.com/" target="_blank">Naviance Student Login</a></li>
                        <li>Ask your counselor for login instructions or your school code</li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-06-30",
        duration: 3,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Summer (June to August)",
        title: "College Essay & Supplemental Essays",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Start drafting your Common App personal essay:</strong>
                    <ul>
                        <li><strong>Choose one of the seven prompts</strong> for the 2024–2025 cycle.</li>
                        <li>The essay should be <strong>between 250–650 words</strong>.</li>
                        <li><a href="https://www.commonapp.org/blog/2024-2025-common-app-essay-prompts" target="_blank">View the official prompts here: Common App Essay Prompts 2024–2025</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Tips for writing a strong Common App essay:</strong>
                    <ul>
                        <li>Focus on a <strong>personal story</strong> that reveals your character and growth.</li>
                        <li>Be <strong>authentic and reflective</strong>; admissions officers value genuine insights.</li>
                        <li>Avoid clichés and overused topics—<strong>strive for originality</strong>.</li>
                        <li><a href="https://www.collegeessayadvisors.com/common-app-2024-2025-essay-prompts-guide/" target="_blank">Common App Essay Prompts Guide – College Essay Advisors</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Work on supplemental essays:</strong>
                    <ul>
                        <li>Many colleges require additional essays tailored to their institution.</li>
                        <li><strong>Common supplemental prompts include:</strong>
                            <ul>
                                <li>"Why this college?"</li>
                                <li>"Describe an extracurricular activity."</li>
                                <li>"Discuss your academic interests."</li>
                            </ul>
                        </li>
                        <li><a href="https://appsupport.commonapp.org/applicantsupport/s/article/What-writing-requirements-are-common-to-all-schools" target="_blank">Check writing requirements: Common App Writing Requirements</a></li>
                        <li><a href="https://www.collegeessayadvisors.com/supplemental-essay-guide-2024-25/" target="_blank">Supplemental Essay Guide 2024–25 – College Essay Advisors</a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-08-31",
        duration: 7,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Summer (June to August)",
        title: "Resume Finalization",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>You mostly have your resume done — now it's time to make sure all the details are added!</strong></li>
                <br>
                <li><strong>Resume Tips:</strong>
                    <ul>
                        <li>Keep it <strong>one page</strong></li>
                        <li>Use <strong>bullet points</strong> to describe roles and achievements</li>
                        <li>Be <strong>clear, action-oriented, and concise</strong></li>
                        <li>Use professional fonts like <strong>Arial</strong> or <strong>Times New Roman</strong> (size 10–12)</li>
                        <li><strong>Save as a PDF</strong> before uploading or submitting</li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-07-30",
        duration: 2,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Summer (June to August)",
        title: "Additional Testing (if needed)",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Retake the SAT/ACT if necessary to improve your scores!</strong>
                    <ul>
                        <li><a href="https://satsuite.collegeboard.org/sat/registration" target="_blank">SAT Registration</a></li>
                        <li><a href="https://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">ACT Registration</a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "",
        duration: 4,
        completed: false
    },
    {
        category: "JUNIOR YEAR (11th Grade) - Summer (June to August)",
        title: "Financial Aid & Fee Planning",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Create These Accounts:</strong>
                    <ul>
                        <li><a href="https://studentaid.gov/" target="_blank">Create your FAFSA account (StudentAid.gov)</a></li>
                        <li><a href="https://studentaid.gov/fsa-id/create-account/launch" target="_blank">Create an FSA ID for yourself</a></li>
                        <li><a href="https://studentaid.gov/fsa-id/create-account/launch" target="_blank">Create an FSA ID for a parent</a></li>
                    </ul>
                <strong>Note:</strong> Each person (you and a parent) needs their own <strong>FSA ID</strong>.</li>
                <br>
                <li><strong>What You'll Need (for both student and parent[s]):</strong>
                    <ul>
                        <li>Social Security Number (SSN)</li>
                        <li>Alien Registration Number (if not a U.S. citizen)</li>
                        <li>Federal income tax returns (IRS Form 1040)</li>
                        <li>W-2s and records of untaxed income</li>
                        <li>Bank statements and investment records</li>
                        <li>List of schools you're applying to</li>
                    </ul>
                <br>
                <li><strong>Helpful Links and Resources:</strong>
                    <ul>
                        <li><a href="https://studentaid.gov/apply-for-aid/fafsa/filling-out/help" target="_blank">FAFSA Application Instructions & Document Checklist</a></li>
                        <li><a href="https://www.youtube.com/watch?v=Y_71iRSa1pw" target="_blank">FAFSA Explained – Video 1</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Additional Tips:</strong>
                    <ul>
                        <li><a href="https://cssprofile.collegeboard.org/" target="_blank">Check if your colleges use the CSS Profile for financial aid</a></li>
                        <li>Find out if your colleges charge <strong>application fees</strong> and whether they offer <strong>fee waivers</strong>.</li>
                        <li><strong>Start gathering documents now</strong> — even though FAFSA isn't open yet, being prepared saves time later!</li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-08-31",
        duration: 3,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Fall (August to November)",
        title: "Common App + CSS Profile Submission!",
        details: `<h4>Details:</h4>
            <ul>
                <li> <strong> Submit Common App After You:</strong> </li>
                <br>
                <li> <strong>Revise and finalize your Common App personal essay:</strong>
                    <ul>
                        <li>Use the <a href="https://www.commonapp.org/blog/2024-2025-common-app-essay-prompts" target="_blank">2024–2025 prompts</a></li>
                        <li>Ensure your essay is <strong>personal, clear, and reflects your voice</strong></li>
                        <li>Keep it <strong>between 250–650 words</strong></li>
                        <li>Ask someone to proofread:
                            <ul>
                                <li>Reach out to a <strong>teacher, counselor, mentor, or trusted friend</strong></li>
                                <li>Use tools like <a href="https://www.grammarly.com/" target="_blank">Grammarly</a> or <a href="https://hemingwayapp.com/" target="_blank">Hemingway Editor</a> for grammar and clarity checks</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <br>
                <li><strong>Submit Early Action (EA) / Early Decision (ED) applications:</strong>
                    <ul>
                        <li><strong>Typical deadlines:</strong> November 1–15</li>
                        <li><strong>Double check</strong> specific deadlines on each college's admissions page</li>
                        <li>Ensure your:
                            <ul>
                                <li>Application</li>
                                <li>Transcript</li>
                                <li>Test scores</li>
                                <li>Recommendation letters</li>
                                <li>All are <strong>submitted on time</strong></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <br>
                <li> If required, submit the CSS Profile (typically due around November). </li>
            </ul>`,
        dueDate: "2025-11-15",
        duration: 5,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Fall (August to November)",
        title: "FAFSA Submission!",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>FAFSA opens October 1</strong> → Submit it as soon as possible at <a href="https://studentaid.gov/" target="_blank">studentaid.gov</a>
                    <ul>
                        <li>Some schools and states award aid on a <strong>first-come, first-served basis</strong> — earlier is better!</li>
                    </ul>
                </li>
                <br>
                <li><strong>To get started:</strong>
                    <ul>
                        <li>Log in using your <strong>FSA ID</strong></li>
                        <li><a href="https://studentaid.gov/fsa-id/create-account/launch" target="_blank">Create or access your FSA ID</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Double check before submitting:</strong>
                    <ul>
                        <li>Your <strong>school list is correct and complete</strong></li>
                        <li><strong>Parent and student financial info</strong> is accurate</li>
                        <li><strong>All required questions</strong> are filled out</li>
                    </ul>
                </li>
                <br>
                <li><strong>After submission:</strong>
                    <ul>
                        <li>You'll receive a <strong>Student Aid Report (SAR)</strong> to review and confirm all information</li>
                        <li>Each school you listed will use your FAFSA to <strong>calculate your financial aid package</strong></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-10-10",
        duration: 4,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Fall (August to November)",
        title: "Recommendation Letters & Transcripts",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Follow up with teachers about recommendation letters:</strong>
                    <ul>
                        <li><strong>Politely remind</strong> teachers if you've already asked</li>
                        <li>Make sure they know your <strong>college deadlines</strong></li>
                        <li><strong>Thank them</strong> for their time and support</li>
                        <li><strong>Ensure recommenders have accounts to upload letters</strong></li>
                        <li>For Common App: teachers must create a <strong>Recommender Account</strong></li>
                        <li><a href="https://www.commonapp.org/counselors-and-recommenders/recommender-guide" target="_blank">Common App Recommender Guide</a></li>
                    </ul>
                </li>
                <br>
                <li><strong>Request official transcripts from your high school:</strong>
                    <ul>
                        <li>Usually done through your <strong>guidance counselor or college office</strong></li>
                        <li>Some schools use <strong>Naviance, SCOIR, or Parchment</strong> for transcript requests</li>
                        <li>Make sure your counselor knows your <strong>full college list and deadlines</strong></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2025-10-20",
        duration: 3,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Fall (August to November)",
        title: "Application Fees & Fee Waivers",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Check the application fee for each college:</strong>
                    <ul>
                        <li>Most range from <strong>$50–$90</strong> per application</li>
                        <li>Fees are listed on each college's <strong>admissions page</strong> or on the <strong>Common App</strong></li>
                    </ul>
                </li>
                <br>
                <li><strong>Use fee waivers if you're eligible:</strong></ul>`,
        dueDate: "2025-09-30",
        duration: 2,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Winter (December to February)",
        title: "Regular Decision Applications",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Submit all Regular Decision applications:</strong>
                <li><strong>Confirm that all required documents are submitted:</strong>
                    <ul>
                        <li><strong>Official transcripts</strong> (sent by your high school/guidance counselor)</li>
                        <li><strong>Test scores</strong> (if required, sent directly from SAT/ACT)</li>
                        <li><strong>Letters of recommendation</strong></li>
                        <li><strong>Application fee</strong> (or ensure fee waiver has been applied)</li>
                    </ul>
                </li>
                <br>
            </ul>`,
        dueDate: "2026-01-15",
        duration: 4,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Winter (December to February)",
        title: "FASFA Follow-Up",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Log into your FAFSA account</strong> at <a href="https://studentaid.gov/" target="_blank">studentaid.gov</a> to confirm submission:
                    <ul>
                        <li>Check that your application says <strong>"Processed Successfully"</strong></li>
                        <li>Review your <strong>Student Aid Report (SAR)</strong> for any errors or issues</li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2026-01-20",
        duration: 3,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Winter (December to February)",
        title: "College Interviews",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Some colleges may request or offer interviews:</strong>
                    <ul>
                        <li>Interviews can be <strong>required, recommended, or optional</strong></li>
                    </ul>
                </li>
                <li><strong>Tips for a successful interview:</strong>
                    <ul>
                        <li><strong>Dress neatly</strong> and arrive on time (or log in early if virtual)</li>
                        <li><strong>Practice</strong> with a teacher, counselor, friend, or use mock interview tools</li>
                        <li><strong>Be honest</strong> and let your personality show—this is a chance to go beyond your application</li>
                        <li><strong>Prepare thoughtful questions</strong> to ask the interviewer about the school</li>
                    </ul>
                </li>
                <br>
            </ul>`,
        dueDate: "2026-01-31",
        duration: 2,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Winter (December to February)",
        title: "Scholarships",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Start with local scholarships — they're often easier to win!</strong>
                    <ul>
                        <li>Check with your <strong>High School Counselor</strong> or <strong>College & Career Center</strong></li>
                        <li><strong>Explore national scholarships:</strong>
                            <ul>
                                <li><a href="https://www.coca-colascholarsfoundation.org/" target="_blank">Coca-Cola Scholars Foundation</a></li>
                                <li><a href="https://www.thegatesscholarship.org/" target="_blank">Gates Scholarship</a></li>
                                <li><a href="https://www.questbridge.org/" target="_blank">QuestBridge National College Match</a></li>
                            </ul>
                        </li>
                        <br>
                        <li><strong>Tips:</strong>
                            <ul>
                                <li><strong>Apply early and often</strong> — even small awards add up!</li>
                                <li><strong>Keep a record</strong> of deadlines, requirements, and submissions</li>
                                <li><strong>Reuse essays</strong> when possible, but tailor them to each scholarship</li>
                            </ul>
                        </li>
                    </ul>`,
        dueDate: "",
        duration: 15,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Spring (March to May)",
        title: "College Decisions & Financial Aid Evaluation",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Admission letters usually arrive March–April:</strong>
                    <ul>
                        <li>Check your <strong>email</strong> and <strong>college application portals</strong> regularly</li>
                        <li>Some schools may also send <strong>physical letters</strong></li>
                    </ul>
                </li>
                <br>
                <li><strong>Compare financial aid offers from each college:</strong>
                    <ul>
                        <li>Review each package for:
                            <ul>
                                <li><strong>Grants</strong> (free money you don't repay)</li>
                                <li><strong>Scholarships</strong> (merit- or need-based aid)</li>
                                <li><strong>Federal student loans</strong> (must be repaid)</li>
                                <li><strong>Work-study opportunities</strong></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <br>
                <li><strong>Consider the total cost of attendance:</strong>
                    <ul>
                        <li>Look beyond tuition — factor in:
                            <ul>
                                <li>Housing</li>
                                <li>Meals</li>
                                <li>Fees</li>
                                <li>Travel</li>
                                <li>Books</li>
                            </ul>
                        </li>
                        <li>Compare <strong>net cost</strong> (total cost – grants/scholarships)</li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2026-04-14",
        duration: 4,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Spring (March to May)",
        title: "Make Your College Choice",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>National Decision Day: May 1</strong>
                    <ul>
                        <li><strong>Choose the college</strong> you will attend</li>
                        <li>Review all your <strong>admission and financial aid offers</strong></li>
                        <li>Consider:
                            <ul>
                                <li><strong>Academic fit</strong></li>
                                <li><strong>Affordability</strong></li>
                                <li><strong>Campus life</strong></li>
                                <li><strong>Personal goals</strong></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <br>
                <li><strong>Decline other offers:</strong>
                    <ul>
                        <li>Log in to each college's portal and <strong>follow their instructions</strong></li>
                        <li>This helps <strong>open spots for other students</strong></li>
                    </ul>
                </li>
                <br>
                <li><strong>Pay your enrollment deposit:</strong>
                    <ul>
                        <li>Usually between <strong>$100–$500</strong></li>
                        <li><strong>Community colleges</strong> may have little to no deposit</li>
                        <li>This secures your spot at the school</li>
                    </ul>
                </li>
                <br>
                <li><strong>Request a deposit waiver if needed:</strong>
                    <ul>
                        <li>Many colleges offer <strong>deposit waivers</strong> for students with financial need</li>
                        <li>Contact the <strong>admissions office</strong> and explain your situation</li>
                        <li>You may be asked to provide documentation (e.g., <strong>fee waiver eligibility</strong> or <strong>financial aid info</strong>)</li>
                    </ul>
                </li>
                <br>
                <li><strong>Helpful Links:</strong>
                    <ul>
                        <li><a href="https://www.collegeessayguy.com/blog/enrollment-deposit" target="_blank">Understanding Enrollment Deposits</a></li>
                        <li><a href="https://www.collegeessayguy.com/blog/how-to-request-a-college-application-fee-waiver" target="_blank">How to Ask for a Deposit Waiver (Tips)</a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2026-05-01",
        duration: 3,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Summer (June to August)",
        title: "Prepare for College",
        details: `<h4>Details:</h4>
            <ul>
                <li><strong>Complete your college housing application:</strong>
                    <ul>
                        <li>Check if <strong>housing is required</strong> for first-year students</li>
                        <li>Be aware of:
                            <ul>
                                <li><strong>Deadlines</strong></li>
                                <li><strong>Deposit fees</strong></li>
                                <li><strong>Roommate selection process</strong></li>
                            </ul>
                        </li>
                        <li>Some schools use portals like <strong>StarRez</strong> or <strong>The Housing Director</strong></li>
                    </ul>
                </li>
                <br>
                <li><strong>Figure out your travel and transportation needs:</strong>
                    <ul>
                        <li>Will you be <strong>commuting, flying, or using public transportation?</strong></li>
                        <li>Research options for:
                            <ul>
                                <li><strong>Long-distance travel:</strong> Flights, trains, buses</li>
                                <li><strong>Local transportation:</strong> Campus transit, shuttles, ride shares</li>
                            </ul>
                        </li>
                        <li>Look for <strong>student discounts</strong> and <strong>book early</strong> to save money</li>
                    </ul>
                </li>
                <br>
                <li><strong>Check and register for orientation:</strong>
                    <ul>
                        <li>Orientation is <strong>mandatory</strong> at many colleges</li>
                        <li>Find dates and register early via your <strong>college's admissions or student portal</strong></li>
                        <li>Find out if there's a <strong>cost to attend</strong> (some are free, others may charge for meals or housing)</li>
                    </ul>
                </li>
                <br>
                <li><strong>Helpful Links to Check:</strong>
                    <ul>
                        <li>Your college's <strong>"Admitted Student" portal</strong> or checklist page</li>
                        <li><a href="https://www.collegepackinglist.com/" target="_blank">College Packing List (Prep Resource)</a></li>
                    </ul>
                </li>
            </ul>`,
        dueDate: "2026-07-31",
        duration: 2,
        completed: false
    },
    {
        category: "SENIOR YEAR (12th Grade) - Summer (June to August)",
        title: "Celebrate Your Success",
        details: `<h4>Details:</h4>
            <ul>
                <li>Enjoy your summer and celebrate your achievements before the next big chapter!</li>
            </ul>`,
        dueDate: "",
        duration: 50,
        completed: false
    }
];

function initializeTasks() {
    const savedTasks = localStorage.getItem('collegePrepTasks');
    const savedDeletedTasks = localStorage.getItem('collegePrepDeletedTasks') || '[]';
    
    if (savedTasks) {
        renderTasks(JSON.parse(savedTasks));
    } else {
        renderTasks(allTasks);
        localStorage.setItem('collegePrepTasks', JSON.stringify(allTasks));
    }
    
    renderDeletedTasks(JSON.parse(savedDeletedTasks));
    updateProgress();
}

function renderTasks(tasks) {
    const container = document.getElementById('task-list-container');
    container.innerHTML = '';
    
    const categories = {};
    
    tasks.forEach(task => {
        if (!task.completed) {
            if (!categories[task.category]) {
                categories[task.category] = [];
            }
            categories[task.category].push(task);
        }
    });
    
    for (const category in categories) {
        const categoryTasks = categories[category];
        const categorySection = document.createElement('div');
        categorySection.className = 'task-container';
        
        const categoryHeader = document.createElement('h2');
        categoryHeader.innerHTML = `${category} <i class="fas fa-chevron-down"></i>`;
        categoryHeader.addEventListener('click', function() {
            const taskList = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (taskList.style.display === 'none') {
                taskList.style.display = 'block';
                icon.className = 'fas fa-chevron-down';
            } else {
                taskList.style.display = 'none';
                icon.className = 'fas fa-chevron-right';
            }
        });
        
        const taskList = document.createElement('div');
        categoryTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        categoryTasks.forEach(task => {
            taskList.appendChild(createTaskElement(task));
        });
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(taskList);
        container.appendChild(categorySection);
    }
    
    renderCompletedTasks(tasks.filter(task => task.completed));
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task' + (task.completed ? ' completed' : '');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
        toggleTaskCompletion(task, this.checked);
    });
    
    const content = document.createElement('div');
    content.className = 'task-content';
    
    const title = document.createElement('div');
    title.className = 'task-title';
    title.textContent = task.title;
    
    const viewDetailsBtn = document.createElement('button');
    viewDetailsBtn.className = 'view-details-btn';
    viewDetailsBtn.textContent = 'View Details';
    viewDetailsBtn.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.classList.toggle('show');
        this.textContent = details.classList.contains('show') ? 'Hide Details' : 'View Details';
    });
    
    const details = document.createElement('div');
    details.className = 'task-details';
    details.innerHTML = task.details;
    
    const meta = document.createElement('div');
    meta.className = 'task-meta';
    
    const date = document.createElement('div');
    date.className = 'task-date';
    date.innerHTML = `<i class="far fa-calendar-alt"></i> Due: <input type="date" class="date-picker" value="${task.dueDate}" data-task-id="${task.title}">`;
    
    const duration = document.createElement('div');
    duration.className = 'task-duration';
    duration.innerHTML = `<i class="far fa-clock"></i> Duration: ${task.duration} hour${task.duration !== 1 ? 's' : ''}`;
    
    const actions = document.createElement('div');
    actions.className = 'task-actions';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', function() {
        deleteTask(task);
    });
    
    date.querySelector('.date-picker').addEventListener('change', function() {
        updateTaskDueDate(task, this.value);
    });
    
    meta.appendChild(date);
    meta.appendChild(duration);
    
    actions.appendChild(deleteBtn);
    
    content.appendChild(title);
    content.appendChild(viewDetailsBtn);
    content.appendChild(details);
    content.appendChild(meta);
    
    taskElement.appendChild(checkbox);
    taskElement.appendChild(content);
    taskElement.appendChild(actions);
    
    return taskElement;
}

function renderCompletedTasks(completedTasks) {
    const container = document.getElementById('completed-tasks-list');
    container.innerHTML = '';
    
    if (completedTasks.length === 0) {
        container.innerHTML = '<p class="no-tasks">No completed tasks yet.</p>';
        return;
    }
    
    completedTasks.forEach(task => {
        container.appendChild(createTaskElement(task));
    });
}

function renderDeletedTasks(deletedTasks) {
    const container = document.getElementById('deleted-tasks-list');
    container.innerHTML = '';
    
    if (deletedTasks.length === 0) {
        container.innerHTML = '<p class="no-tasks">No recently deleted tasks.</p>';
        return;
    }
    
    deletedTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        
        const content = document.createElement('div');
        content.className = 'task-content';
        
        const title = document.createElement('div');
        title.className = 'task-title';
        title.textContent = task.title;
        
        const meta = document.createElement('div');
        meta.className = 'task-meta';
        
        const date = document.createElement('div');
        date.className = 'task-date';
        date.innerHTML = `<i class="far fa-calendar-alt"></i> Due: ${formatDate(task.dueDate)}`;
        
        const category = document.createElement('div');
        category.className = 'task-category';
        category.textContent = task.category;
        
        const actions = document.createElement('div');
        actions.className = 'task-actions';
        
        const restoreBtn = document.createElement('button');
        restoreBtn.className = 'restore-btn';
        restoreBtn.innerHTML = '<i class="fas fa-undo"></i>';
        restoreBtn.addEventListener('click', function() {
            restoreTask(task);
        });
        
        meta.appendChild(date);
        meta.appendChild(category);
        
        actions.appendChild(restoreBtn);
        
        content.appendChild(title);
        content.appendChild(meta);
        
        taskElement.appendChild(content);
        taskElement.appendChild(actions);
        
        container.appendChild(taskElement);
    });
}

function toggleTaskCompletion(task, completed) {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const taskIndex = tasks.findIndex(t => t.title === task.title && t.category === task.category);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = completed;
        localStorage.setItem('collegePrepTasks', JSON.stringify(tasks));
        renderTasks(tasks);
        updateProgress();
        checkDueSoonTasks();
    }
}

function updateTaskDueDate(task, newDueDate) {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const taskIndex = tasks.findIndex(t => t.title === task.title && t.category === task.category);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].dueDate = newDueDate;
        localStorage.setItem('collegePrepTasks', JSON.stringify(tasks));
        renderTasks(tasks);
        checkDueSoonTasks();
    }
}

function deleteTask(task) {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const deletedTasks = JSON.parse(localStorage.getItem('collegePrepDeletedTasks')) || [];
    
    const updatedTasks = tasks.filter(t => !(t.title === task.title && t.category === task.category));
    deletedTasks.unshift(task);
    
    if (deletedTasks.length > 10) {
        deletedTasks.pop();
    }
    
    localStorage.setItem('collegePrepTasks', JSON.stringify(updatedTasks));
    localStorage.setItem('collegePrepDeletedTasks', JSON.stringify(deletedTasks));
    
    renderTasks(updatedTasks);
    renderDeletedTasks(deletedTasks);
    updateProgress();
    checkDueSoonTasks();
}

function restoreTask(task) {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const deletedTasks = JSON.parse(localStorage.getItem('collegePrepDeletedTasks')) || [];
    
    tasks.push(task);
    const updatedDeletedTasks = deletedTasks.filter(t => !(t.title === task.title && t.category === task.category));
    
    localStorage.setItem('collegePrepTasks', JSON.stringify(tasks));
    localStorage.setItem('collegePrepDeletedTasks', JSON.stringify(updatedDeletedTasks));
    
    renderTasks(tasks);
    renderDeletedTasks(updatedDeletedTasks);
    updateProgress();
    checkDueSoonTasks();
}

function addCustomTask(e) {
    e.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;
    const dueDate = document.getElementById('task-due-date').value;
    const duration = parseInt(document.getElementById('task-duration').value);
    const category = "CUSTOM TASKS";
    
    const newTask = {
        category,
        title,
        details: formatDetails(details),
        dueDate,
        duration,
        completed: false
    };
    
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    tasks.push(newTask);
    
    localStorage.setItem('collegePrepTasks', JSON.stringify(tasks));
    document.getElementById('add-task-form').reset();
    
    renderTasks(tasks);
    updateProgress();
    checkDueSoonTasks();
}

function formatDetails(details) {
    const lines = details.split('\n').filter(line => line.trim() !== '');
    let html = '';
    
    for (const line of lines) {
        if (line.startsWith('http')) {
            html += `<li><a href="${line}" target="_blank">${line}</a></li>`;
        } else {
            html += `<li>${line}</li>`;
        }
    }
    
    return `<ul>${html}</ul>`;
}

function toggleCompletedTasks() {
    const container = document.getElementById('completed-tasks-list');
    const button = document.getElementById('toggle-completed');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        button.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Completed Tasks';
    } else {
        container.style.display = 'none';
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Show Completed Tasks';
    }
}

function toggleDeletedTasks() {
    const container = document.getElementById('deleted-tasks-list');
    const button = document.getElementById('toggle-deleted');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        button.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Recently Deleted Tasks';
    } else {
        container.style.display = 'none';
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Show Recently Deleted Tasks';
    }
}

function updateProgress() {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    document.getElementById('progress').style.width = `${progressPercentage}%`;
    document.getElementById('progress-text').textContent = `${progressPercentage}% completed`;
    document.getElementById('progress-percent').textContent = `${progressPercentage}% completed`;
}

function checkDueSoonTasks() {
    const tasks = JSON.parse(localStorage.getItem('collegePrepTasks')) || allTasks;
    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);
    
    const dueSoonTasks = tasks.filter(task => {
        if (task.completed) return false;
        const dueDate = new Date(task.dueDate);
        return dueDate >= today && dueDate <= oneWeekLater;
    });
    
    const container = document.getElementById('due-soon-tasks');
    
    if (dueSoonTasks.length === 0) {
        container.innerHTML = '<p class="no-tasks">There are no tasks due within 1 week of today but keep an eye out!</p>';
        return;
    }
    
    container.innerHTML = '';
    
    dueSoonTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        
        const content = document.createElement('div');
        content.className = 'task-content';
        
        const title = document.createElement('div');
        title.className = 'task-title';
        title.textContent = task.title;
        
        const meta = document.createElement('div');
        meta.className = 'task-meta';
        
        const date = document.createElement('div');
        date.className = 'task-date';
        date.innerHTML = `<i class="far fa-calendar-alt"></i> Due: ${formatDate(task.dueDate)}`;
        
        const category = document.createElement('div');
        category.className = 'task-category';
        category.textContent = task.category.split(' - ')[1];
        
        meta.appendChild(date);
        meta.appendChild(category);
        
        content.appendChild(title);
        content.appendChild(meta);
        
        taskElement.appendChild(content);
        container.appendChild(taskElement);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}