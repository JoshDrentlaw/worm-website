export default {
    name: 'hours',
    title: 'Hours',
    type: 'document',
    fields: [
        {
            name: 'dayOrder',
            title: 'Day Order',
            type: 'number',
            hidden: true
        },
        {
            name: 'day',
            title: 'Day',
            type: 'string'
        },
        {
            name: 'open',
            title: 'Open',
            type: 'string'
        },
        {
            name: 'close',
            title: 'Close',
            type: 'string'
        }
    ],
    orderings: [
        {
            title: 'Days, Forward',
            name: 'daysAsc',
            by: [
                {field: 'dayOrder', direction: 'asc'}
            ]
        },
        {
            title: 'Days, Reverse',
            name: 'daysDesc',
            by: [
                {field: 'dayOrder', direction: 'desc'}
            ]
        }
    ],
    preview: {
        select:  {
            title: 'day',
            open: 'open',
            close: 'close'
        },
        prepare(selection) {
            const { title, open, close } = selection
            return {
                title: title,
                subtitle: `${open} - ${close}`
            }
        }
    }
}