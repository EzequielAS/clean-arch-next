import { DataToAuth } from '../models'

export interface UserAuth {
	auth: (data: DataToAuth) => void
}
