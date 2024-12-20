

export const API_URLS = {
    saveSentEmail: {
        endpoint: 'save',
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    
    saveDraftEmails: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
    },
    toggleStarredEmails:{
        endpoint:'starred',
        method: 'POST'
    },
    deleteEmail: {
        endpoint: 'delete',
        method:'delete'
    }
}
