export default {
    type: 'object',
    name: 'q-a',
    fields: [
        {
            title: 'Question',
            name: 'question',
            type: 'string'
        },
        {
            title: 'Answer',
            name: 'answer',
            type: 'blockContent'
        }
    ]
}