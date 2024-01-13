import { DataToAuthModel, UserTokenModel } from '../models'

export interface UserAuth {
	auth: (data: DataToAuthModel) => Promise<UserAuth.Model>
}

export namespace UserAuth {
	export type Model = UserTokenModel
}
