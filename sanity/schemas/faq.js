export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            title: 'Q/A Group Name',
            name: 'qaTitle',
            type: 'string'
        },
        {
            title: 'Q/A Group',
            name: 'qaGroup',
            type: 'array',
            descrption: 'This allows you to order the questions how you want.',
            of: [{
                type: 'q-a',
                name: 'q-a'
            }]
        }
    ],
    preview: {
        select: {
            title: 'qaTitle'
        }
    }
}