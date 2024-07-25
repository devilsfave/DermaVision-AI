/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { AnalysisResultFindManyArgs } from "../../analysisResult/base/AnalysisResultFindManyArgs";
import { AnalysisResult } from "../../analysisResult/base/AnalysisResult";
import { AnalysisResultWhereUniqueInput } from "../../analysisResult/base/AnalysisResultWhereUniqueInput";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { ConsultationFindManyArgs } from "../../consultation/base/ConsultationFindManyArgs";
import { Consultation } from "../../consultation/base/Consultation";
import { ConsultationWhereUniqueInput } from "../../consultation/base/ConsultationWhereUniqueInput";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        age: true,
        gender: true,
        name: true,
        skinType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        age: true,
        gender: true,
        name: true,
        skinType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        age: true,
        gender: true,
        name: true,
        skinType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
          age: true,
          gender: true,
          name: true,
          skinType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
          age: true,
          gender: true,
          name: true,
          skinType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/analysisResults")
  @ApiNestedQuery(AnalysisResultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "read",
    possession: "any",
  })
  async findAnalysisResults(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<AnalysisResult[]> {
    const query = plainToClass(AnalysisResultFindManyArgs, request.query);
    const results = await this.service.findAnalysisResults(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        result: true,

        image: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/analysisResults")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectAnalysisResults(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalysisResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisResults: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/analysisResults")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateAnalysisResults(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalysisResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisResults: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/analysisResults")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectAnalysisResults(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalysisResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisResults: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/notifications")
  @ApiNestedQuery(NotificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async findNotifications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Notification[]> {
    const query = plainToClass(NotificationFindManyArgs, request.query);
    const results = await this.service.findNotifications(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        message: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reports")
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Report[]> {
    const query = plainToClass(ReportFindManyArgs, request.query);
    const results = await this.service.findReports(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectReports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateReports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectReports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/consultations")
  @ApiNestedQuery(ConsultationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "any",
  })
  async findConsultations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Consultation[]> {
    const query = plainToClass(ConsultationFindManyArgs, request.query);
    const results = await this.service.findConsultations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },

        analysisResult: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/consultations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectConsultations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ConsultationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      consultations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/consultations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateConsultations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ConsultationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      consultations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/consultations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectConsultations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ConsultationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      consultations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/images")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findImages(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImages(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        imagePath: true,
        metadata: true,

        user: {
          select: {
            id: true,
          },
        },

        analysisResult: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectImages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateImages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectImages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}