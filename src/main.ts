import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ConfigService } from "@nestjs/config";
import { swaggerBootstrap } from "./swagger.bootstrap";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const port = configService.get<number>("app.port");

  swaggerBootstrap(app);

  await app.listen(port);
}
bootstrap();
