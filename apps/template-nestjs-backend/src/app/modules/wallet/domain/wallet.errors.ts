import { ExceptionBase } from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/exceptions';

export class WalletNotEnoughBalanceError extends ExceptionBase {
  static readonly message = 'Wallet has not enough balance';

  public readonly code = 'WALLET.NOT_ENOUGH_BALANCE';

  constructor(metadata?: unknown) {
    super(WalletNotEnoughBalanceError.message, undefined, metadata);
  }
}
