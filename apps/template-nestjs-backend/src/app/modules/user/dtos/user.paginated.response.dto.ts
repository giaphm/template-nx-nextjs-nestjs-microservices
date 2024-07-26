import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from '@nx-nestjs-nextjs-prisma-docker-compose-starter/shared-ddd-hexagon/lib/api/paginated.response.base';
import { UserResponseDto } from './user.response.dto';

export class UserPaginatedResponseDto extends PaginatedResponseDto<UserResponseDto> {
  @ApiProperty({ type: UserResponseDto, isArray: true })
  readonly data: readonly UserResponseDto[];
}
