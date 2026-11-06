const adminEmail = 'medmehdi939@gmail.com';
const loginPanel = document.getElementById('loginPanel');
const queuePanel = document.getElementById('queuePanel');
const feedback = document.getElementById('adminFeedback');
const submissionList = document.getElementById('submissionList');
const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');

const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(window.firebaseConfig);
const auth = app.auth();
const db = app.firestore();

function showFeedback(message, isError = false) {
    feedback.textContent = message;
    feedback.className = isError ? 'feedback error' : 'feedback';
}

function makeTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
}

function renderSubmission(document) {
    const product = document.data();
    const card = document.createElement('article');
    card.className = 'submission-card';

    const image = document.createElement('img');
    image.className = 'submission-image';
    image.src = product.image_url;
    image.alt = product.title;
    image.loading = 'lazy';
    card.append(image);

    const details = document.createElement('div');
    details.append(makeTextElement('h3', 'submission-title', product.title));
    details.append(makeTextElement(
        'p',
        'submission-meta',
        `الصنف: ${product.category} · الثمن: ${product.price || 'بلا ثمن'}`
    ));

    if (product.old_price) {
        details.append(makeTextElement('p', 'submission-meta', `الثمن القديم: ${product.old_price}`));
    }

    if (product.affiliate_url) {
        const link = document.createElement('a');
        link.className = 'affiliate-link';
        link.href = product.affiliate_url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = product.affiliate_url;
        details.append(link);
    }

    const actions = document.createElement('div');
    actions.className = 'decision-actions';
    for (const [status, label, style] of [
        ['approved', 'قبول ونشر', 'approve'],
        ['rejected', 'رفض', 'reject']
    ]) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `decision-button ${style}`;
        button.textContent = label;
        button.addEventListener('click', () => reviewSubmission(document.id, status, button));
        actions.append(button);
    }
    details.append(actions);
    card.append(details);
    return card;
}

async function loadPendingSubmissions() {
    showFeedback('كنحمّلو الاقتراحات...');
    submissionList.replaceChildren();
    const snapshot = await db.collection('productSubmissions')
        .where('status', '==', 'pending')
        .get();

    if (snapshot.empty) {
        showFeedback('ما كاين حتى اقتراح معلّق دابا.');
        return;
    }

    const fragment = document.createDocumentFragment();
    const submissions = [...snapshot.docs].sort((left, right) => {
        const leftTime = left.data().createdAt?.toMillis?.() ?? 0;
        const rightTime = right.data().createdAt?.toMillis?.() ?? 0;
        return rightTime - leftTime;
    });
    submissions.forEach(document => fragment.append(renderSubmission(document)));
    submissionList.append(fragment);
    showFeedback(`كاينين ${snapshot.size} اقتراحات للمراجعة.`);
}

async function reviewSubmission(id, status, button) {
    button.disabled = true;
    showFeedback(status === 'approved' ? 'كننشرو المنتج...' : 'كنسجلو الرفض...');
    try {
        await db.collection('productSubmissions').doc(id).update({
            status,
            reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        await loadPendingSubmissions();
    } catch (error) {
        console.error('Could not review product submission:', error);
        showFeedback('ما قدرناش نحفظو القرار. عاود المحاولة.', true);
        button.disabled = false;
    }
}

signInButton.addEventListener('click', async () => {
    signInButton.disabled = true;
    showFeedback('كنفتحو تسجيل الدخول...');
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error('Admin Google sign-in failed:', error);
        showFeedback(`تعذر تسجيل الدخول: ${error.message}`, true);
        signInButton.disabled = false;
    }
});

signOutButton.addEventListener('click', () => {
    auth.signOut().catch(error => {
        console.error('Admin sign-out failed:', error);
        showFeedback('تعذر تسجيل الخروج. عاود المحاولة.', true);
    });
});

auth.onAuthStateChanged(async user => {
    if (!user) {
        loginPanel.hidden = false;
        queuePanel.hidden = true;
        signInButton.disabled = false;
        return;
    }
    if (user.email !== adminEmail || !user.emailVerified) {
        await auth.signOut();
        showFeedback(`هاد الحساب ما عندوش صلاحية الإدارة. دخل بـ ${adminEmail}.`, true);
        loginPanel.hidden = false;
        queuePanel.hidden = true;
        return;
    }

    loginPanel.hidden = true;
    queuePanel.hidden = false;
    document.getElementById('signedInAs').textContent = `مسجل الدخول بـ ${user.email}`;
    try {
        await loadPendingSubmissions();
    } catch (error) {
        console.error('Could not load product submissions:', error);
        showFeedback(`ما قدرناش نحمّلو الاقتراحات: ${error.message}`, true);
    }
});
