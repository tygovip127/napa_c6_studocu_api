import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { UsersModule } from '@/modules/users/users.module';
import { VerificationTokenStrategy } from '@/modules/auth/strategies/verificationToken.strategy';
import { MailService } from '@/modules/mail/mail.service';
import { DocumentsModule } from '@/modules/documents/documents.module';

@Module({
  imports: [JwtModule.register({}), UsersModule, DocumentsModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    VerificationTokenStrategy,
    MailService,
  ],
})
export class AuthModule {}
