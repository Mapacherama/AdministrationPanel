export function errorHandler(response) {
    if (response.data?.errors) {
        const message = response.data.errors[0].message.replaceAll("'", '"')
        return message.includes('[') ? JSON.parse(message) : [message]
    }
}