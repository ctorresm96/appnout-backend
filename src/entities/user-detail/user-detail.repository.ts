import { EntityRepository, Repository } from 'typeorm';
import { UserDetail } from './entities/user-detail.entity';

@EntityRepository(UserDetail)
export class UserDetailRepository extends Repository<UserDetail> {}
