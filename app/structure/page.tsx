import { promises as fs } from "fs";
import path from "path";
import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Project structure — disquote",
  description:
    "Current file and folder structure of the disquote catalogue application.",
};

const IGNORE = new Set([".git", "node_modules", ".next", ".opencode", ".agents"]);

type Node = { name: string; type: "dir" | "file"; children: Node[] };

async function readDir(rel: string): Promise<Node[]> {
  const abs = path.join(process.cwd(), rel);
  let entries;
  try {
    entries = await fs.readdir(abs, { withFileTypes: true });
  } catch {
    return [];
  }
  const nodes: Node[] = [];
  for (const e of entries) {
    if (IGNORE.has(e.name)) continue;
    if (e.isDirectory()) {
      nodes.push({
        name: e.name,
        type: "dir",
        children: await readDir(path.join(rel, e.name)),
      });
    } else if (e.isFile()) {
      nodes.push({ name: e.name, type: "file", children: [] });
    }
  }
  nodes.sort((a, b) =>
    a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1,
  );
  return nodes;
}

function Tree({ nodes, depth = 0 }: { nodes: Node[]; depth?: number }) {
  return (
    <ul
      className={
        depth === 0
          ? "space-y-1"
          : "space-y-1 ml-3 border-l border-border/40 pl-3"
      }
    >
      {nodes.map((n) => (
        <li key={n.name} className="text-sm">
          <span className="font-mono">
            {n.type === "dir" ? "📁" : "📄"} {n.name}
            {n.type === "dir" ? "/" : ""}
          </span>
          {n.children.length > 0 && <Tree nodes={n.children} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}

export default async function StructurePage() {
  const tree = await readDir(".");
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Project structure</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Current file and folder layout of the disquote catalogue application.
      </p>
      <div className="mt-8">
        <Tree nodes={tree} />
      </div>
    </Container>
  );
}
