import { Uri } from "vscode";

export interface DrawioExtensionApi {
	drawioExtensionV1?: {
		getDrawioPlugins?: (
			context: DocumentContext
		) => Promise<{ jsCode: string }[]>;
	};
}

export interface DocumentContext {
	uri: Uri;
}
