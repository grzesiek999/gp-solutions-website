

const CompanyLogo= ({className, path}: {className: string, path: string}) => {
    return (
        <div>
            <img src={path}
                 alt="GP solutions icon error"
                 className={className}
            />
        </div>
    )
}

export default CompanyLogo