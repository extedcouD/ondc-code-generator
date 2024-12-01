import { JSONSchema7 } from "json-schema";
import { BUID_TYPE } from "../types/build";
import { loadAndDereferenceYaml } from "../utils/config-utils/yaml";
import { SchemaExtactionService } from "../services/schema-service";

type CodeGeneratorConfig = {
	removeRequiredfromSchema: boolean;
	removeEnumsfromSchema: boolean;
};

const defaultConfig: CodeGeneratorConfig = {
	removeRequiredfromSchema: true,
	removeEnumsfromSchema: true,
};

class ConfigCompiler {
	buildData: BUID_TYPE | undefined;
	jsonSchemas: Record<string, JSONSchema7> | undefined;
	possibleJsonPahts: Record<string, string[]> | undefined;
	private SchemaExtactionService: SchemaExtactionService;
	constructor() {
		this.SchemaExtactionService = new SchemaExtactionService();
	}
	// 1. extract build, create schemas , extract possible paths , extract errorcodes
	initialize = async (
		buildYaml: string,
		generatorConfig: Partial<CodeGeneratorConfig> = {}
	) => {
		const finalConfig = { ...defaultConfig, ...generatorConfig };
		this.buildData = await loadAndDereferenceYaml<BUID_TYPE>(buildYaml);
		this.jsonSchemas = await this.SchemaExtactionService.extractSchemas(
			this.buildData,
			finalConfig.removeRequiredfromSchema,
			finalConfig.removeEnumsfromSchema
		);
		this.possibleJsonPahts = this.SchemaExtactionService.extractPossiblePaths(
			this.jsonSchemas
		);
	};
}
