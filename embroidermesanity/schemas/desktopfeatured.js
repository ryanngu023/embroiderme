export default {
    name: 'desktopfeatured',
    title: 'Desktop Featured Items',
    type: 'document',
    fields: [
        {
            name: 'bannerimage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'itemname',
            title: 'Item Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'productid',
            title: 'Related Product ID',
            type: 'string'
        }
    ]
}