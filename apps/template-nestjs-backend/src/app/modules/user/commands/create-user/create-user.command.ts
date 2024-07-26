import {
  Command,
  CommandProps,
} from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/ddd';

export class CreateUserCommand extends Command {
  readonly email: string;

  readonly country: string;

  readonly postalCode: string;

  readonly street: string;

  constructor(props: CommandProps<CreateUserCommand>) {
    super(props);
    this.email = props.email;
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}
