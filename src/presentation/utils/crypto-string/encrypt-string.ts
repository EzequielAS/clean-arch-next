export function encryptString(text: string) {
	let result = ''

	for (let i = 0; i < text.length; i++) {
		const charCode = text.charCodeAt(i)

		result += String.fromCharCode(charCode + 1)
	}

	return result
}
