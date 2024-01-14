export function decryptString(textEncrypted: string) {
	let result = ''

	for (let i = 0; i < textEncrypted.length; i++) {
		const charCode = textEncrypted.charCodeAt(i)

		result += String.fromCharCode(charCode - 1)
	}

	return result
}
