// Create an object that models the data of your favorite email application.

// Open the email application and take a look at the application.
// What items do you notice? Make a list of those items (ex. emails, my name, etc.)
// Make a detailed outline of the data hierarchy.
// Ex.
// Gmail
// -  mailboxes
//     -- inbox
//     -- drafts
//     -- sent
// - contacts
//     -- 
//     -- 
//     -- 

let appData = {
	name: "Gmail",
	mailboxes: {
		inbox: [
			{ from: 'Full Stack 101', email: 'carolinapaymasters@myisolved.com', content: 'Your pay stub is ready.' },
			{ from: 'Dreamville Fest', email: 'info@dreamvillefest.com', content: 'Last chance to purchase Dreamville merch.' },
			{ from: 'Harlowe Dentist', email: 'harlowe-nc@dentist.org', content: 'You are due for a cleaning.' },
		],

		outbox: [
			{ from: 'outbox 1 from', email: 'outbox 1 email', content: 'outbox 1 content' },
			{ from: 'outbox 2 from', email: 'outbox 2 email', content: 'outbox 2 content' },
			{ from: 'outbox 3 from', email: 'outbox 3 email', content: 'outbox 3 content' },
		],

		drafts: [
			{ from: 'draft 1 from', email: 'draft 1 email', content: 'draft 1 content' },
			{ from: 'draft 2 from', email: 'draft 2 email', content: 'draft 2 content' },

		],

		deletedMail: [
			{ from: 'deleted 1 from', email: 'deleted 1 email', content: 'deleted 1 content' },
			{ from: 'deleted 2 from', email: 'deleted 2 email', content: 'deleted 2 content' },
			{ from: 'deleted 3 from', email: 'deleted 3 email', content: 'deleted 3 content' },
		],
	},

	draft: [
		{ from: 'draft 1 from', email: 'draft 1 email', content: 'draft 1 content' },
		{ from: 'draft 2 from', email: 'draft 2 email', content: 'draft 2 content' }

	],

	contacts: [
		{ name: 'contact 1', email: 'contact1@email.com', content: 'contact 1 content' },
		{ name: 'contact 2', email: 'contact2@email.com', content: 'contact 2 content' }
	]
};


//for (let i = 0; i < appData.mailboxes.length; i++) {
//	let mailbox_list = appData.mailboxes[i];
//	console.log(mailbox_list);
//};

//Get a list of mailboxes
for (const list in appData.mailboxes) {
	console.log(list)
}
console.log(" ");

//Get a list of emails
console.log(appData.mailboxes.inbox);
console.log(" ");

// Get the text of the second email in the visible list
console.log(appData.mailboxes.inbox[1].content);
console.log(" ");

// Mark an email as sent
appData.mailboxes.inbox[0].content = 'Mark as Sent';
console.log(appData.mailboxes.inbox[0]);

// Add a draft email to the drafts mailbox
appData.draft.newDraft = { from: 'new draft from', email: 'new draft email', content: 'new draft content' };
console.log(appData.draft.newDraft);













