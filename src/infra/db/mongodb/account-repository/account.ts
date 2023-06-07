
import { type AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { type AccountModel } from '../../../../domain/models/account';
import { type AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const copiedAccountData = { ...accountData };
    const accountCollection = MongoHelper.getCollection('accounts');
    const {
      insertedId: { id }
    } = await accountCollection.insertOne(copiedAccountData);

    return Object.assign({}, accountData, { id: id.toString() });
  }
}
