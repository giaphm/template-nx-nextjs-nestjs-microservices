import {
  DomainEvent,
  DomainEventProps,
} from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/ddd';

export class UserDeletedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<UserDeletedDomainEvent>) {
    super(props);
  }
}
