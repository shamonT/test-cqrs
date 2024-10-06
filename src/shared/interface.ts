import express from "express";

export interface IRequest extends express.Request {
  name: string;
  id: any;
}

export interface IServiceProvider {
  register(): void;
}

export interface IHandler {
  handle(...args: any): Promise<any>;
}

export interface IResponse {
  code: number;
  success: boolean;
  message?: string;
  data?: any;
  errors?: Array<any>;
}
