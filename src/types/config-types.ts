import { ConfigSyntax, TestObjectSyntax } from "../constants/syntax.js";
import { Primitive } from "./general-types.js";

export type TestObject = {
	[TestObjectSyntax.Name]: string;
	[TestObjectSyntax.Return]: string | TestObject[];
	[TestObjectSyntax.Scope]?: string;
	[TestObjectSyntax.ErrorCode]?: number;
	[TestObjectSyntax.Continue]?: string;
	[key: string]: string | string[] | number | TestObject[] | undefined;
};

export type TestArray = TestObject[];

export type SessionDataValue = string | Primitive[] | null;

export type SessionDataApi = {
	[key: string]: SessionDataValue;
};

export type ValidationConfig = {
	[ConfigSyntax.Tests]: Record<string, TestArray>;
	[ConfigSyntax.SessionData]: Record<string, SessionDataApi>;
};
