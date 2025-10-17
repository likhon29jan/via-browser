import { ReactNode } from 'react'

export type DataTableColumn<T> = {
  key: string
  header: string
  headerClassName?: string
  cellClassName?: string
  render: (item: T) => ReactNode
}

export type DataTableProps<T> = {
  caption: string
  description?: ReactNode
  items: readonly T[]
  getRowKey: (item: T) => string
  columns: readonly DataTableColumn<T>[]
  emptyState?: ReactNode
}

export function DataTable<T>({
  caption,
  description,
  items,
  getRowKey,
  columns,
  emptyState,
}: DataTableProps<T>) {
  const headerClasses = (column: DataTableColumn<T>) =>
    [
      'border-b border-gray-200 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600',
      column.headerClassName,
    ]
      .filter(Boolean)
      .join(' ')

  const cellClasses = (column: DataTableColumn<T>) =>
    [
      'border-b border-gray-100 px-6 py-4 align-top text-sm text-gray-700',
      column.cellClassName,
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <figcaption className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h3 className="text-base font-semibold text-gray-900">{caption}</h3>
        {description ? (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        ) : null}
      </figcaption>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left">
          <thead className="bg-white">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={headerClasses(column)}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td
                  className="px-6 py-6 text-sm text-gray-500"
                  colSpan={columns.length}
                >
                  {emptyState ?? 'No data available'}
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={getRowKey(item)} className="even:bg-gray-50">
                  {columns.map((column) => (
                    <td key={column.key} className={cellClasses(column)}>
                      {column.render(item)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </figure>
  )
}
