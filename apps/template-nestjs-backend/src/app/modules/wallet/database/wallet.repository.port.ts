import { RepositoryPort } from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/ddd';
import { WalletEntity } from '../domain/wallet.entity';

export type WalletRepositoryPort = RepositoryPort<WalletEntity>;
