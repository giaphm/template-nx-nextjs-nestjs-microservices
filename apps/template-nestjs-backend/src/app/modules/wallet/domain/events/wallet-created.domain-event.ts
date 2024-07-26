import {
  DomainEvent,
  DomainEventProps,
} from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/ddd';

export class WalletCreatedDomainEvent extends DomainEvent {
  readonly userId: string;

  constructor(props: DomainEventProps<WalletCreatedDomainEvent>) {
    super(props);
  }
}
