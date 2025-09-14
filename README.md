# Registry 

> My custom shadcn/ui registry with reusable components for my Next.js projects

## Usage

Add the following to the `components.json` file.

```json
{
  "registries": {
    "@rportas": "http://ui.royportas.com/r/{name}.json"
  }
}
```

Then you can install components with:

```bash
bunx shadcn add @rportas/{component-name}
```

## Development

Install [Bun](https://bun.sh/) and run the following commands:

```bash
# Install dependencies
bun install

# Start the development server
bun dev
```

## Adding new components

1. Create the new component in the `registry` directory.
2. Update the `items` array in the `registry.json` file

## Testing the registry locally


1. Build the registry
    ```bash
    bun build
    ```
2. Run the dev server
    ```bash
    bun dev
    ```
3. In your Next.js project, add the following to the `components.json` file:
    ```json
    {
      "registries": {
        "@rportas": "http://localhost:3000/r/{name}.json"
      }
    }
    ```
4. Try to install a component
    ```bash
    bunx shadcn add @rportas/date
    ```